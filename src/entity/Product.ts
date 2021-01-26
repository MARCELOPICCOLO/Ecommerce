import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm';
import { Category } from './Category';

@Entity('products')
export class Product{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    category_id: string;

    @Column()
    name: string;

    @Column({precision: 10, scale: 2})
    price: number;
    
    @Column()
    quantify: number;

    @CreateDateColumn()
    createAt : Date;

    @UpdateDateColumn()
    updateAt : Date;

    @ManyToOne(()=>Category, products => Product, {eager: true})
    category : Category

}