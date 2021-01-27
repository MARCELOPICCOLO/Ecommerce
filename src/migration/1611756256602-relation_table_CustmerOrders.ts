import {MigrationInterface, QueryRunner} from "typeorm";

export class relationTableCustmerOrders1611756256602 implements MigrationInterface {
    name = 'relationTableCustmerOrders1611756256602'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "orders"."id" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "orders"."id" IS NULL`);
    }

}
