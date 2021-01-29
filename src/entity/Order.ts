import {Column,JoinColumn, CreateDateColumn, Entity,ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany} from 'typeorm'
import { Customer } from './Customer';
import { OrderProduct } from './OrderProduct';


@Entity('orders')
export class Order{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


    @ManyToOne(()=>Customer, orders => Order,{eager: true})
    @JoinColumn()
    customer: Customer


    @OneToMany(()=>OrderProduct, order =>OrderProduct)
    Ordersproducts : OrderProduct[]

}