import { RoleSeeder } from "./RoleSeeder";
import { UserSeeder } from "./UserSeeder";
import { BusinessSeeder } from "./BusinessSeeder";
import { CommentSeeder } from "./CommentSeeder";
import { CommentResponseSeeder } from "./CommentResponseSeeder";

(async () => {
    console.log("Seeding started");
    await new RoleSeeder().start();
    await new UserSeeder().start();
    await new BusinessSeeder().start();
    await new CommentSeeder().start();
    await new CommentResponseSeeder().start();

})(); // This is a self-invoking function