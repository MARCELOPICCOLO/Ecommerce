import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Order } from './Order';


@Entity('customers')

export class Customer{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length:60})
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(()=>Order, customer => Customer)
    orders : Order[]; 
}