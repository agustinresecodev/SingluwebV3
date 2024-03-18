import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class CreateCommentsTable1709746133244 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
               name: "comments",
               columns: [
                  {
                     name: "id",
                     type: "int",
                     isPrimary: true,
                     isGenerated: true,
                     generationStrategy: "increment",
                  },
                  {
                     name: "text",
                     type: "varchar",
                     length: "255",
                  },
                  {
                    name: "valoration",
                    type: "int"
                  },
                  {
                    name: "user_id",
                    type: "int",
                  },
                  {
                      name: "created_at",
                      type: "timestamp",
                      default: "now()",
                  },
                  {
                    name: "business_id",
                    type: "int",
                  }
                ],
                foreignKeys: [
                {
                   columnNames: ["user_id"],
                   referencedTableName: "users",
                   referencedColumnNames: ["id"],
                },
                {
                    columnNames: ["business_id"],
                    referencedTableName: "businesses",
                    referencedColumnNames: ["id"],
                }
                ],
            }),
            true
         );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("comments");
    }

}
