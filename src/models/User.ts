import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, ManyToMany, OneToOne, OneToMany } from "typeorm"
import {Role} from "./Role"
import {Comment} from "./Comment"
import {CommentResponse} from "./CommentResponse"



@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({name:"name"})
    name!: string;

    @Column({name:"surname"})
    surname!:string;

    @Column({name:"email"})
    email!:string;

    @Column({name:"password", select:false})
    password!:string;


    //RELATIONSHIPS

    // Many to one with role
   
    @ManyToOne(()=>Role,(role)=>role.user)
    @JoinColumn({name:"role_id"})
    role!:Role;

    // Many to many with comments
    @ManyToMany(()=> Comment, comment => comment.user)
    comments!: Comment[];

    // One to Many with responses
    @OneToMany(()=> CommentResponse, commentResponse => commentResponse.user )
    commentResponses!: Response[];

}