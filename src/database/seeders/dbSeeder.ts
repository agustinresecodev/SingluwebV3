import { RoleSeeder } from "./RoleSeeder";
import { UserSeeder } from "./UserSeeder";
import { BusinessSeeder } from "./BusinessSeeder";

(async () => {
    console.log("Seeding started");
    await new RoleSeeder().start();
    await new UserSeeder().start();
    await new BusinessSeeder().start();

})(); // This is a self-invoking function