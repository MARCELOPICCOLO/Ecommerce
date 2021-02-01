import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableImages1612180322341 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name : 'images',
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'id_product',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'content',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp'

                },
                {
                    name:'updated_at',
                    type:'timestamp'
                }             
            ],
            foreignKeys:[
                {
                    name: 'foreignKeyImages',
                    columnNames: ['id_product'],
                    referencedColumnNames : ['id'],
                    referencedTableName: 'products'
                }               
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }
}
