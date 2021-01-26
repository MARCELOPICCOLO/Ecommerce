import {Entity,  PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,OneToMany} from 'typeorm'
import {Product} from './Product'

@Entity("categories")
export class Category{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name : string;

    @CreateDateColumn()
    date_at : Date;

    @UpdateDateColumn()
    update_at : Date;
    
    @OneToMany(()=>Product, category => Category)
    products : Product[];

}
