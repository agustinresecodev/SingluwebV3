import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, ManyToMany, OneToOne } from "typeorm"
import {Role} from "./Role"
import {Comment} from "./Comment"



@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({name:"name"})
    firstName!: string;

    @Column({name:"surname"})
    lastName!:string;

    @Column({name:"email"})
    email!:string;

    @Column({name:"password", select:false})
    password!:string;

    @Column({name:"is_active"})
    isActive!:boolean;


    //RELATIONSHIPS

    // Many to one with role
    @ManyToOne(type => Role, role => role.users)
    @JoinColumn({name:"role_id"})
    role!:Role;

    // Many to many with comments
    @ManyToMany(()=> Comment, comment => comment.user)
    comments!: Comment[];

}