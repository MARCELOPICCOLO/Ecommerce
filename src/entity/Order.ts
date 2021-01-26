import { Column, CreateDateColumn, Entity, getCustomRepository, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Customer } from './Customer';
import { OrderProducts } from './OrderProduct';


@Entity('orders')
export class Order{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    customer_id: string;

    @CreateDateColumn()
    created_at : Date;

    @UpdateDateColumn()
    updated_at: Date;
 
    @ManyToOne(()=>Customer, ordes => Order,{eager: true})
    customer : Customer;// Customer

    @OneToMany(()=>OrderProducts, order => Order)
    orders_products : OrderProducts [];

}