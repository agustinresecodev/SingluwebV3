import { RoleSeeder } from "./RoleSeeder";
import { UserSeeder } from "./UserSeeder";

(async () => {
    console.log("Seeding started");
    await new RoleSeeder().start();
    await new UserSeeder().start();

})(); // This is a self-invoking function