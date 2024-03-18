import { Comment } from "../../models/Comment";
import { Factory } from "../factories/Factory";
import { Seeder } from "./Seeder";
import { CommentFactory } from "../factories/CommentFactory";
import { SeederConfig } from "../../config/SeederConfig";
import { User } from "../../models/User";
import { Business } from "../../models/Business";
import { get } from "http";
import { getRandomValueFromArray } from "../../helpers/common";

export class CommentSeeder extends Seeder{
    protected async generate(): Promise<void> {
        const {COMMENTS} = SeederConfig;

        const users = await User.find();

        const businesses = await Business.find();

        const commentsToCreate = new CommentFactory().createMany(COMMENTS);

        commentsToCreate.forEach(comment => {
            comment.user = getRandomValueFromArray(users);
            comment.business = getRandomValueFromArray(businesses);
            
        });

       

        // Save to the database
        await Comment.save(commentsToCreate);
    }
}
