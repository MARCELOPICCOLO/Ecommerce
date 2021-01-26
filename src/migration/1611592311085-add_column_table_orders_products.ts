import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class addColumnTableOrdersProducts1611592311085 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const order_id = new TableColumn({
            name: 'order_id',
            type: 'uuid'
        })

        const product_id = new TableColumn({
            name: 'product_id',
            type: 'uuid'
        })
     
        await queryRunner.addColumns('orders_products',[order_id, product_id]);


        const fk_order_id = new TableForeignKey({
            columnNames: ["order_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "orders"
        });

        const fk_product_id = new TableForeignKey({
            columnNames: ["product_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "products"
        });


        await queryRunner.createForeignKeys("orders_products", [fk_order_id, fk_product_id]);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("orders_products", "order_id");
        await queryRunner.dropForeignKey("orders_products", "product_id");
        await queryRunner.dropColumn("question", "order_id");
        await queryRunner.dropColumn("question", "product_id");
    }

}
