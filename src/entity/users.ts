import { Entity, PrimaryGeneratedColumn, Column, Check } from "typeorm";

@Entity()
@Check(`"is_admin" in (0, 1)`)
export class users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0, nullable: false  })
    is_admin: number;

    @Column({ type: "varchar", length: 200 })
    name: string;

    @Column({ type: "varchar", length: 200, unique: true })
    login: string;

    @Column({ type: "varchar", length: 200 })
    pass: string;

    @Column({ type: "varchar", length: 200, nullable: true })
    email: string;

    @Column({ type: "varchar", length: 200, nullable: true })
    newmail: string;

    @Column({default: () => "now()"})
    created: Date;

    @Column({ nullable: true })
    deleted: Date;

    @Column({default: () => "now()"})
    last_actived: Date;

    @Column({ default: 0, nullable: false })
    is_anonymous: number;
}