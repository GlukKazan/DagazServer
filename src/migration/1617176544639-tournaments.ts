import {MigrationInterface, QueryRunner} from "typeorm";

export class tournaments1617176544639 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`insert into tournament_types(id, name) values(1, 'Round')`);

        await queryRunner.query(`insert into rating_types(id, name) values(1, 'Elo')`);

        await queryRunner.query(`insert into game_scores(id, game_id, variant_id, result_id, scores) values(1, 30, null, 1, 1)`);
        await queryRunner.query(`insert into game_scores(id, game_id, variant_id, result_id, scores) values(2, 30, null, 2, 0)`);
        await queryRunner.query(`insert into game_scores(id, game_id, variant_id, result_id, scores) values(3, 30, null, 3, 0.5)`);

        await queryRunner.query(`insert into game_settings(id, name, game_id, variant_id, selector_value, tournamenttype_id, ratingtype_id, main_time, additional_time) values(1, 'Chess', 30, 31, 1, 1, 1, 7200, 0)`);
        await queryRunner.query(`insert into game_settings(id, name, game_id, variant_id, selector_value, tournamenttype_id, ratingtype_id, main_time, additional_time) values(2, 'Chess (Mini)', 30, 125, 1, 1, 1, 1800, 0)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`delete from game_settings`);
        await queryRunner.query(`delete from game_scores`);
        await queryRunner.query(`delete from rating_types`);
        await queryRunner.query(`delete from tournament_types`);
    }
}
