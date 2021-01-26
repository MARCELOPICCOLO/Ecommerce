import{ Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Order } from './Order';

@Entity('orders_products')

export class OrderProducts{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    product_id : string;

    @Column({precision: 10, scale: 2})
    price: number;

    @Column()
    quantify : number;

    @CreateDateColumn()
    created_at : Date;

    @UpdateDateColumn()
    updated_at : Date;

    //manyToMany
    @ManyToOne(()=>Order, orders_products => OrderProducts, {eager: true})
    order: Order;

}