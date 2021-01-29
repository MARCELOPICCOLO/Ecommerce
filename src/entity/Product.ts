import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne,OneToMany,PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Category } from './Category';
import { OrderProduct } from './OrderProduct';

@Entity('products')
export class Product{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    quantify: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(()=>Category, products => Product,{eager: true})
    @JoinColumn()
    category: Category;

    @OneToMany(()=>OrderProduct, products => Product)
    orderProduct = OrderProduct;
}
