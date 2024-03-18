import { faker } from "@faker-js/faker";
import { Factory } from "./Factory";
import { Comment } from "../../models/Comment";

export class CommentFactory extends Factory<Comment>{
    protected generate(): Comment{
        return{
            text: faker.lorem.paragraph(),
            valoration: Math.floor(Math.random() * 100) + 1,
        } as Comment;
    }
}
