import { Factory } from "./Factory";
import { faker } from "@faker-js/faker";
import { CommentResponse } from "../../models/CommentResponse";

export class CommentResponseFactory extends Factory<CommentResponse> {
    protected generate(): CommentResponse {
        return {
            text: faker.lorem.paragraph(),
            createdAt: faker.date.recent(),
            valoration: Math.floor(Math.random() * 100) + 1,
        
        } as CommentResponse;
    }
}