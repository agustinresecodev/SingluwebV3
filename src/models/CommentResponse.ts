import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment";


@Entity('responses')
export class CommentResponse  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name:"text"})
    text!: string;

    @Column({name:"created_at"})
    createdAt!: Date;

    @Column({name:"valoration"})
    valoration!: number;

    //RELATIONSHIPS
    
    // Many to one with user
    @ManyToOne(()=> User, user => user.commentResponses)
    @JoinColumn({name:"user_id"})
    user!: User;

    // Many to one with comment
    @ManyToOne(()=> Comment, comment => comment.commentResponses)
    @JoinColumn({name:"comment_id"})
    comment!: Comment;
}