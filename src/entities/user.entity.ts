import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class user{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    first_name: string;
    @Column()
    last_names: string;
    @Column({unique: true})
    email: string;
    @Column()
    password: string;
    @CreateDateColumn()
    created_at: Date;

}