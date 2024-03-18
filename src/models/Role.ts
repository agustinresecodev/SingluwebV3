import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./User";

@Entity('roles')
export class Role extends BaseEntity{
    // Id autoincremental
    @PrimaryGeneratedColumn()
    id!: number;

    // Name of the role
    @Column({name:"name"})
    name!: string;

    // Description of the role
    @Column({name:"description"})
    description!: string;


    // Relationships

    // One to many with user
    @OneToMany(()=> User, user => user.role)
    users!: User[];

}