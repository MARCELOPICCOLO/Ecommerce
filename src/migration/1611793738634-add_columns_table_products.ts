import {MigrationInterface, QueryRunner,TableColumn,TableForeignKey} from "typeorm";

export class addColumnsTableProducts1611793738634 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
   
        const category_id = new TableColumn({
            name: 'category_id',
            type: 'uuid'
        })

        await queryRunner.addColumns('products',[category_id]);

        const fk_category_id = new TableForeignKey({
            columnNames: ["category_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "categories",
        });

        await queryRunner.createForeignKeys("products", [fk_category_id]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey("products", "category_id");
        await queryRunner.dropColumn("products", "category_id");

    }

}
