import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableOrders1611681728622 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orders',
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'customer_id',
                    type: 'uuid',
                },
                {
                    name: 'created_at',
                    type: 'timestamp'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp'
                }
            ],
            foreignKeys:[
                {
                    name: 'ForeingKeyCustomer',
                    columnNames: ['customer_id'],
                    referencedTableName: 'customers',
                    referencedColumnNames : ['id'],
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
    }

}
