import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1758822442588 implements MigrationInterface {
    name = 'Migrations1758822442588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "location" character varying NOT NULL, "capacity" integer NOT NULL, "price" numeric, "convenant" text array, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "event"`);
    }

}
