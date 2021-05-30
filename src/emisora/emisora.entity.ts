import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'emisoras'})
export class EmisoraEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    streaming: string;

    @Column()
    logo: string;
}