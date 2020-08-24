import { Injectable, Inject, InternalServerErrorException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { users } from '../entity/users';
import { User } from '../interfaces/user.interface';
import { tokens } from '../entity/tokens';

@Injectable()
export class UsersService {

    constructor(
        @Inject('USERS_REPOSITORY')
        private readonly service: Repository<users>,
        @Inject('TOKENS_REPOSITORY')
        private readonly tokens: Repository<tokens>,
    ) {}  

    async getToken(id: number, type: number): Promise<string> {
      const x = await this.service.query(
        `select value_str
         from   tokens
         where  user_id = $1 and type_id = $2
         and    now() < expired`, [id, type]);
      if (!x || x.length != 1) {
          return null;
      }
      return x[0].value_str;
  }

    async checkToken(user: number, dev: string, val: string): Promise<tokens> {
      const x = await this.tokens.createQueryBuilder("tokens")
      .where("tokens.user_id = :user_id and tokens.device_str = :dev and value_str = :val", { user_id: user,dev: dev, val: val })
      .getOne();
      if (!x) {
        return null;
      }
      return x;
    }

    async createUser(username: string): Promise<User> {
      let x: users = new users();
      x.is_admin = 0;
      x.name = username;
      x.login = username;
      x.pass = username;
      x.is_anonymous = 1;
      const y = await this.service.createQueryBuilder("users")
      .insert()
      .into(users)
      .values(x)
      .returning('*')
      .execute();
      let r: User = new User();
      r.id = y.generatedMaps[0].id;
      r.name = username;
      r.username = username;
      r.created = new Date();
      return r;
    }

    async addToken(user: number, dev: string, type: number, val: string, sec: number): Promise<tokens> {
      let x: tokens = new tokens();
      x.type_id = type;
      x.user_id = user;
      x.device_str = dev;
      x.value_str = val;
      x.created = new Date();
      x.expired = new Date(x.created.getTime() + sec);
      const y = await this.service.createQueryBuilder("tokens")
      .insert()
      .into(tokens)
      .values(x)
      .returning('*')
      .execute();
      x.id = y.generatedMaps[0].id;
      return x;
    }

    async clearTokens(user: number, dev: string): Promise<boolean> {
      await this.tokens.createQueryBuilder("tokens")
      .delete()
      .from(tokens)
      .where("tokens.user_id = :user_id and tokens.device_str = :dev", { user_id: user,dev: dev })
      .execute();
      return true;
    }
      
    async findAll(): Promise<User[]> {
        try {
          const u = await this.service.createQueryBuilder("users")
          .where("users.deleted is null or users.deleted > now()")
          .getMany();
          let l: User[] = u.map(x => {
              let it = new User();
              it.id = x.id;
              it.is_admin = x.is_admin;
              it.name = x.name;
              it.username = x.login;
              it.email = x.email;
              it.created = x.created;
              it.deleted = x.deleted;
              it.last_actived = x.last_actived;
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

      async getUsersByGame(id: number): Promise<User[]> {
        try {
          const x = await this.service.query(
            `select b.id as id, b.name as name, b.login as username,
                    b.created as created, b.last_actived as last_actived
             from   user_preferences a
             inner  join users b on (b.id = a.user_id)
             where  a.game_id = $1
             and  ( b.deleted is null or b.deleted > now() )`, [id]);
          if (!x || x.length != 1) {
              return null;
          }
          let l: User[] = x.map(x => {
            let it = new User();
            it.id = x.id;
            it.name = x.name;
            it.username = x.username;
            it.created = x.created;
            it.last_actived = x.last_actived;
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

      async touchUser(id: number): Promise<boolean> {
        await this.service.createQueryBuilder("users")
        .update(users)
        .set({ last_actived: new Date()})
        .where("users.id = :id", {id: id})
        .execute();
        return true;
      }

      async findOneByLogin(name: string): Promise<User> {
        try {
          // TODO: Check Activated EMail
          const x = await this.service.createQueryBuilder("users")
          .where("users.login = :name", {name: name})
          .getOne();
          if (!x) {
              return null;
          }
          await this.touchUser(x.id);
          let it = new User();
          it.id = x.id;
          it.is_admin = x.is_admin;
          it.name = x.name;
          it.username = x.login;
          it.password = x.pass;
          it.email = x.email;
          it.created = x.created;
          it.deleted = x.deleted;
          it.last_actived = x.last_actived;
          return it;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
      }

      async findOneById(id: number): Promise<User> {
        try {
          const x = await this.service.createQueryBuilder("users")
          .where("users.id = :id", {id: id})
          .getOne();
          if (!x) {
            return null;
          }
          await this.touchUser(x.id);
          let it = new User();
          it.id = x.id;
          it.is_admin = x.is_admin;
          it.name = x.name;
          it.username = x.login;
          it.password = x.pass;
          it.email = x.email;
          it.created = x.created;
          it.deleted = x.deleted;
          it.last_actived = x.last_actived;
          return it;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
      }
    
      async addUser(x: User): Promise<User> {
        try {
          // TODO: Verify EMail
          const y = await this.service.createQueryBuilder("users")
          .insert()
          .into(users)
          .values({
            name: x.name,
            login: x.username,
            pass: x.password,
            newmail: x.email
          })
          .returning('*')
          .execute();
          x.id = y.generatedMaps[0].id;
          return x;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
      }

      async delUser(id: number): Promise<User> {
        try {
          await this.service.createQueryBuilder("users")
          .update(users)
          .set({ deleted: new Date() })
          .where("users.id = :id", {id: id})
          .execute();
          return await this.findOneById(id);
      } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
      }
}
