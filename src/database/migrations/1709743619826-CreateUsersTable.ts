import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class CreateUsersTable1709743619826 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
               name: "users",
               columns: [
                  {
                     name: "id",
                     type: "int",
                     isPrimary: true,
                     isGenerated: true,
                     generationStrategy: "increment",
                  },
                  {
                     name: "name",
                     type: "varchar",
                     length: "50",
                  },
                  {
                     name: "surname",
                     type: "varchar",
                     length: "50",
                  },
                  {
                     name: "email",
                     type: "varchar",
                     length: "100",
                     isUnique: true,
                  },
                  {
                     name: "password",
                     type: "varchar",
                     length: "255",
                  },
                  {
                     name: "role_id",
                     type: "int",
                  },
               ],
               foreignKeys: [
                  {
                     columnNames: ["role_id"],
                     referencedTableName: "roles",
                     referencedColumnNames: ["id"],
                  },
               ],
            }),
            true
         );
      }
   
      public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropTable("users");
      }
   }
   
