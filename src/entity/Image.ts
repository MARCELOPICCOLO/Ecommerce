import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('images')
export class Image{
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @PrimaryColumn()
   product_id: string;

   @Column()
   content: string;

  @CreateDateColumn()
   created_at: Date;


    @UpdateDateColumn()
   update_at:Date;

}