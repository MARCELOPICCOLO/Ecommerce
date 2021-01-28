import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableProducts1611791868748 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'products',
            columns:[
                {
                    name:'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar'
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
            ],
        }));    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
