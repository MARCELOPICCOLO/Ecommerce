import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class addColumnOnTableOrder1611590533762 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("orders", new TableColumn({
            name: "customer_id",
            type: "uuid"
        }));

        await queryRunner.createForeignKey("orders", new TableForeignKey({
            columnNames: ["customer_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "customers",
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("orders");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("customer_id") !== -1);
        await queryRunner.dropForeignKey("orders", foreignKey);
        await queryRunner.dropColumn("orders", "customer_id");    
    }

}
