import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm';
import { Category } from './Category';

@Entity("Products")
export class Product{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @ManyToOne(()=>Category, products => Product, {eager: true})
    category : Category

    @CreateDateColumn()
    createAt : Date;

    @UpdateDateColumn()
    updateAt : Date;

   
}