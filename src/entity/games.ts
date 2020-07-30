import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class games {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column({ nullable: true })
    parent_id: number;
    @ManyToOne(type => games)
    @JoinColumn({ name: "parent_id" })
    parent: games;

    @Column({ type: "varchar", length: 100 })
    name: string;

    @Column({ type: "text", unique: true })
    filename: string;

    @Column({ nullable: false })
    players_total: number;

    @Column({default: () => "now()"})
    created: Date;

    @Column({ nullable: true })
    main_time: number;

    @Column({ nullable: true })
    additional_time: number;
}