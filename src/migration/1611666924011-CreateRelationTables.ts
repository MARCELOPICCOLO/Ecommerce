import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRelationTables1611666924011 implements MigrationInterface {
    name = 'CreateRelationTables1611666924011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "foreignCategory"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP CONSTRAINT "FK_266b0df20b9e4423bc9da1bbdc1"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP CONSTRAINT "FK_beb618ce6dae64b9d817394ebdb"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_772d0ce0473ac2ccfa26060dbe9"`);
        await queryRunner.query(`ALTER TABLE "categories" RENAME COLUMN "created_at" TO "date_at"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "order_id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "products" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "products" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "orderId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "customerId" uuid`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "category_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "quantify"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "quantify" integer NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "categories"."update_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "update_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "product_id"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "product_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "price" integer(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "quantify"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "quantify" integer NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders_products"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "customer_id" character varying NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "email" character varying(60) NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customers"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD CONSTRAINT "FK_823bad3524a5d095453c43286bb" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_e5de51ca888d8b1f5ac25799dd1" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_e5de51ca888d8b1f5ac25799dd1"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP CONSTRAINT "FK_823bad3524a5d095453c43286bb"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "customers"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "customer_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "orders_products"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "quantify"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "quantify" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "price" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "product_id"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "product_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "update_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "categories"."update_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "quantify"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "quantify" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "category_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "customerId"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "order_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "updated_at" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "categories" RENAME COLUMN "date_at" TO "created_at"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_772d0ce0473ac2ccfa26060dbe9" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD CONSTRAINT "FK_beb618ce6dae64b9d817394ebdb" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD CONSTRAINT "FK_266b0df20b9e4423bc9da1bbdc1" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "foreignCategory" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
