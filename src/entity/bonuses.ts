import { Entity, PrimaryGeneratedColumn, Index, Column, ManyToOne, JoinColumn } from "typeorm";
import { bonus_types } from "./bonus_types";
import { user_games } from "./user_games";

@Entity()
export class bonuses {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column({ nullable: false })
    type_id: number;
    @ManyToOne(type => bonus_types)
    @JoinColumn({ name: "type_id" })
    bonustype: bonus_types;

    @Index()
    @Column({ nullable: false })
    uid: number;
    @ManyToOne(type => user_games)
    @JoinColumn({ name: "uid" })
    ug: user_games;

    @Index({unique: true})
    @Column({ type: "text", nullable: false })
    bonus: string;

    @Column({default: () => "now()", nullable: false})
    created: Date;

    @Column({nullable: true})
    expired: Date;

    @Column({nullable: true})
    activated: Date;

    @Column({ type: "text", nullable: true })
    external_info: string;

    @Column({ type: "text", nullable: true })
    phone: string;

    @Column({ type: "text", nullable: true })
    email: string;

    @Column({ type: "text", nullable: true })
    name: string;

    @Column({ type: "text", nullable: true })
    serv: string;

    @Column({ type: "text", nullable: true })
    game: string;
}