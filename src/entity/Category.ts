import {Entity,  PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,OneToMany} from 'typeorm'
import {Product} from './Product'

@Entity("Categories")
export class Category{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name : string;

    @OneToMany(()=>Product, category => Category)
    products : Product[];

    @CreateDateColumn()
    date_at : Date;

    @UpdateDateColumn()
    update_at : Date;

}
