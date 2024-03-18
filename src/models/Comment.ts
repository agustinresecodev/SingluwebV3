import { Entity, PrimaryGeneratedColumn, BaseEntity,Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Business } from "./Business";

@Entity('comments')
export class Comment  extends BaseEntity{


@PrimaryGeneratedColumn()
id!: number;

@Column({name:"text"})
text!: string;

@Column({name:"Valoration"})
valoration!: number;


//////  RELATIONSHIPS   //////

// Many to one with user
@ManyToOne(() => User, user => user.comments)
@JoinColumn({name:"user_id"})
user!: User;

// Many to one with business
@ManyToOne(() => Business, business => business.comments)
@JoinColumn({name:"business_id"})
business!: Business;



}