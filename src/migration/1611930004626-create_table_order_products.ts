import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableOrderProducts1611930004626 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'orders_products',
            columns:[
                {
                    name: 'products_id',
                    type:'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'order_id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'price',
                    type: 'numeric',
                    precision: 10,
                    scale: 2
                },
                {
                    name: 'quantify',
                    type: 'numeric',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders_products');
    }

}
