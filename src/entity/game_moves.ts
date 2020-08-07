import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn } from "typeorm";
import { users } from "./users";
import { game_sessions } from "./game_sessions";

@Entity()
export class game_moves {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column({ nullable: false })
    session_id: number;
    @ManyToOne(type => game_sessions)
    @JoinColumn({ name: "session_id" })
    session: game_sessions;

    @Index()
    @Column({ nullable: false })
    user_id: number;
    @ManyToOne(type => users)
    @JoinColumn({ name: "user_id" })
    user: users;

    @Column({ nullable: false })
    turn_num: number;

    @Column({ type: "text", nullable: false  })
    move_str: string

    @Column({ type: "text", nullable: true })
    setup_str: string;

    @Column({ type: "text", nullable: true })
    note: string;

    @Column({ nullable: false })
    time_delta: number;

    @Column({ nullable: true })
    accepted: Date;
}