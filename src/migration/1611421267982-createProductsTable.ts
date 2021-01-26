import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProductsTable1611421267982 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "products",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy :'uuid',
                    default : 'uuid_generate_v4()'
                },
                {
                    name: 'category_id',
                    type: 'uuid',
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "price",
                    type: "numeric",
                    precision: 10,
                    scale : 2
                },
                {
                    name: "quantify",
                    type: "numeric",
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',      
                }
            ],
            foreignKeys : [
                {
                    name :'foreignCategory',
                    columnNames : ['category_id'],
                    referencedTableName : 'categories',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }), true)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
