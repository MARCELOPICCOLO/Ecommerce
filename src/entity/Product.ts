import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne,PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Category } from './Category';

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
}
