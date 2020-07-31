import { Injectable, Inject, InternalServerErrorException, HttpStatus } from '@nestjs/common';
import { game_moves } from '../entity/game_moves';
import { Repository } from 'typeorm';
import { Move } from '../interfaces/move.interface';
import { user_games } from '../entity/user_games';
import { game_sessions } from '../entity/game_sessions';

@Injectable()
export class MoveService {

    constructor(
        @Inject('MOVE_REPOSITORY')
        private readonly service: Repository<game_moves>
    ) {}  
    
    async getMovesBySession(id: number): Promise<Move[]> {
        try {
            const x = await this.service.query(
                `select id, session_id, user_id, turn_num,
                        move_str, setup_str, note, time_delta
                 from   game_moves
                 where  session_id = $1
                 order  by id`, [id]);
            if (!x || x.length != 1) {
                return null;
            }
            let l: Move[] = x.map(x => {
                let it = new Move();
                it.id = x.id;
                it.session_id = x.session_id;
                it.user_id = x.user_id;
                it.turn_num = x.turn_num;
                it.move_str = x.move_str;
                it.setup_str = x.setup_str;
                it.note = x.note;
                it.time_delta = x.time_delta;
                return it;
            });
            return l;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
    }

    async touchSession(user: number, sess: number): Promise<boolean> {
        await this.service.createQueryBuilder("game_sessions")
        .update(game_sessions)
        .set({ 
            last_user: user,
            last_time: Date.now()
        })
        .where("id = :id and last_user <> :user", {id: sess, user: user})
        .execute();
        return true;
    }

    async getConfirmedMove(user: number, sess: number): Promise<Move> {
        try {
            const x = await this.service.query(
                `select a.id, a.session_id, a.user_id, a.turn_num,
                        a.move_str, a.setup_str, a.note, a.time_delta
                 from game_moves a
                 inner join game_sessions b on (b.id = a.session_id and b.closed is null)
                 where a.user_id <> :user and a.session_id = :sess
                 and not a.setup_str is null
                 order by a.id is desc`, [user, sess]);
            if (!x || x.length != 1) {
                return null;
            }
            let it = new Move();
            it.id = x[0].id;
            it.session_id = x[0].session_id;
            it.user_id = x[0].user_id;
            it.turn_num = x[0].turn_num;
            it.move_str = x[0].move_str;
            it.setup_str = x[0].setup_str;
            it.note = x[0].note;
            it.time_delta = x[0].time_delta;
            await this.touchSession(user, sess);
            return it;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
    }

    async getTimeLimit(user: number, sess: number): Promise<number> {
        const x = await this.service.query(
            `select time_limit 
             from user_games 
             where session_id = :sess 
             and user_id = :user`, [sess, user]);
        if (!x || x.length != 1) {
            return null;
        }
        return x[0].time_limit;
    }

    async getAdditionalTime(sess: number): Promise<number> {
        const x = await this.service.query(
            `select b.additional_time * 1000 as additional_time
             from  game_sessions a
             inner join games b on (b.id = a.game_id)
             where a.id = :sess`, [sess]);
        if (!x || x.length != 1) {
            return null;
        }
        return x[0].additional_time;
    }

    async getUnconfirmedMove(sess: number): Promise<Move> {
        try {
            const x = await this.service.query(
                `select a.id, a.session_id, a.user_id, a.turn_num,
                        a.move_str, a.setup_str, a.note, a.time_delta
                 from game_moves a
                 inner join game_sessions b on (b.id = a.session_id and b.closed is null)
                 where a.session_id = :sess
                 and a.setup_str is null
                 order by a.id is desc`, [sess]);
            if (!x || x.length != 1) {
                return null;
            }
            let it = new Move();
            it.id = x[0].id;
            it.session_id = x[0].session_id;
            it.user_id = x[0].user_id;
            it.turn_num = x[0].turn_num;
            it.move_str = x[0].move_str;
            it.setup_str = x[0].setup_str;
            it.note = x[0].note;
            it.time_delta = x[0].time_delta;
            it.time_limit = await this.getTimeLimit(it.user_id, it.session_id);
            it.additional_time = await this.getAdditionalTime(it.session_id);
            return it;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
    }

    async getLastTime(id: number): Promise<number> {
        const x = await this.service.query(
            `select last_time from game_sessions where id = :id`, [id]);
        if (!x || x.length != 1) {
            return null;
        }
        return x[0].last_time;
    }

    async checkSession(id: number): Promise<boolean> {
        const x = await this.service.query(
            `select id from game_sessions where id = :id and closed is null`, [id]);
        if (!x || x.length != 1) {
            return false;
        }
        return true;
    }

    async addMove(user: number, x: Move): Promise<Move> {
        x.user_id = user;
        try {
            const f = await this.checkSession(x.session_id);
            if (!f) {
                return null;
            }
            const last_time = await this.getLastTime(x.session_id);
            const time_delta = Date.now() - last_time;
            const y = await this.service.createQueryBuilder("game_moves")
            .insert()
            .into(game_moves)
            .values({
                session_id: x.session_id,
                user_id: x.user_id,
                move_str: x.move_str,
                turn_num: x.turn_num,
                note: x.note,
                time_delta: time_delta
            })
            .returning('*')
            .execute();
            x.id = y.generatedMaps[0].id;
            let time_limit = await this.getTimeLimit(x.user_id, x.session_id) 
            if (time_limit > 0) {
                time_limit -= time_delta;
            } else {
                time_limit = 0;
            }
            await this.service.createQueryBuilder("user_games")
            .update(user_games)
            .set({ 
                time_limit: time_limit
             })
            .where("session_id = :sess and user_id = :user", {sess: x.session_id, user: x.user_id})
            .execute();
            return x;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
    }

    async confirmMove(x: Move): Promise<Move> {
        try {
            const f = await this.checkSession(x.session_id);
            if (!f) {
                return null;
            }
            await this.service.createQueryBuilder("game_moves")
            .update(game_moves)
            .set({ 
                setup_str: x.setup_str
             })
            .where("id = :id", {id: x.id})
            .execute();
            await this.service.createQueryBuilder("game_sessions")
            .update(game_sessions)
            .set({ 
                last_setup: x.setup_str
             })
            .where("id = :id", {id: x.session_id})
            .execute();
            return x;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException({
                status: HttpStatus.BAD_REQUEST,
                error: error
            });
        }
    }
}
