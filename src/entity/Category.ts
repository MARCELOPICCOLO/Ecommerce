import {Entity,  PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,OneToMany} from 'typeorm'
import {Product} from './Product'
@Entity()

export class Category{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @CreateDateColumn()
    date_at : Date;

    @UpdateDateColumn()
    update_at : Date;

    @OneToMany(() => Product, product => product.cat)
    products: Product[];

}
