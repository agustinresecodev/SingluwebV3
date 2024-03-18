import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBussinessesTable1709743675534 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
               name: "businesses",
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
                     length: "40",
                  },
                  {
                    name: "direction",
                    type: "varchar",
                    length: "100",
                  },
                  {
                    name:"city",
                    type:"varchar",
                    length:"40"
                  },
                  {
                    name:"state",
                    type:"varchar",
                    length:"40"
                  },
                  {
                    name:"zip",
                    type:"int",                    
                  },
                  { name: "phone",
                    type: "int",
                  },
                  {
                    name:"email",
                    type:"varchar",
                    length:"100"
                  },
                  {
                    name:"web",
                    type:"varchar",
                    length:"100"
                  },
                  {
                    name:"description",
                    type:"varchar",
                    length:"255"
                  },
                  {
                    name:"profile_image",
                    type:"varchar",
                    length:"255"
                  },
                  {
                    name:"facebook_profile",
                    type:"varchar",
                    length:"255"
                  },
                  {
                    name:"instagram_profile",
                    type:"varchar",
                    length:"255"
                  },
                  {
                    name:"twitter_profile",
                    type:"varchar",
                    length:"255"
                  },
                  {
                    name:"lng",
                    type:"float",
                  },
                  {
                    name:"lat",
                    type:"float",
                  },
                  {
                    name:"created_at",
                    type:"timestamp",
                  },
                  {
                    name:"updated_at",
                    type:"timestamp",
                  },
                  {
                    name:"verified",
                    type:"boolean",
                  },
                  {
                    name:"verified_at",
                    type:"timestamp",
                  },
                  {
                    name:"maps_url",
                    type:"varchar",
                    length:"255"
                  }


               ],
            }),
            true
         );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("businesses");
    }

}
