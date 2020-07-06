import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MaratonaLives {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

}