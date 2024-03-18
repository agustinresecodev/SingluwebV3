import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateResponsesTable1709746374029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
               name: "responses",
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
                     name: "created_at",
                     type: "timestamp",
                     default: "now()",
                  },
                  {
                    name: "user_id",
                    type: "int",
                  },
                  {
                    name: "comment_id",
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
                    columnNames: ["comment_id"],
                    referencedTableName: "comments",
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
