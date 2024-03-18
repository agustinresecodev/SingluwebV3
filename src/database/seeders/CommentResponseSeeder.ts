import { Seeder } from "./Seeder";
import { Comment } from "../../models/Comment";
import { Factory } from "../factories/Factory";
import { CommentResponseFactory } from "../factories/CommentResponseFactory";
import { SeederConfig } from "../../config/SeederConfig";
import { User } from "../../models/User";
import { getRandomValueFromArray } from "../../helpers/common";
import { CommentResponse } from "../../models/CommentResponse";



export class CommentResponseSeeder extends Seeder{
    protected async generate(): Promise<void> {
        const {COMMENTRESPONSES} = SeederConfig;

        const users = await User.find();

        const comment = await Comment.find();

        const responseToCreate = new CommentResponseFactory().createMany(COMMENTRESPONSES);

        responseToCreate.forEach(response => {
            response.user = getRandomValueFromArray(users);
            response.comment = getRandomValueFromArray(comment);
            
        });

       

        // Save to the database
        await CommentResponse.save(responseToCreate);
    }
}