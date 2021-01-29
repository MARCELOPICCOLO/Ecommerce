import{ Column, CreateDateColumn, Entity, JoinColumn,ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Order } from './Order';
import { Product } from './Product';

@Entity('orders_products')
export class OrderProduct{

    @PrimaryGeneratedColumn('uuid')
    product_id: string;

    @PrimaryGeneratedColumn('uuid')
    order_id : string;

    @Column()
    price:number;

    @Column()
    quantify : number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at : Date;

    @OneToMany(()=>Product, orderProduct => OrderProduct)
    @JoinColumn()
    products : Product[];

    @ManyToOne(()=>Order, OrderProduct => OrderProduct, {eager: true})
    @JoinColumn()
    order: Order

}

