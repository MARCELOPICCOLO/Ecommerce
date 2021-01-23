import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm';
import { Category } from './Category';

@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @CreateDateColumn()
    createAt : Date;

    @UpdateDateColumn()
    updateAt : Date;

    @ManyToOne(() => Category, cat => cat.products)
    cat : Category

}