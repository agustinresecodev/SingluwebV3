import { SeederConfig } from "../../config/SeederConfig";
import { User } from "../../models/User";
import { UserRoles } from "../../constants/UserRoles";
import { UserFactory } from "../factories/UserFactory";
import { Seeder } from "./Seeder";

export class UserSeeder extends Seeder{
    protected async generate(): Promise<void> {
        const {ADMINS, USERS, BUSINESSES} = SeederConfig;

        const userFactory = new UserFactory();

        // Create Admins
        const adminUsers = userFactory.createMany(ADMINS);
        adminUsers.forEach(async (user) => {
            user.role = UserRoles.ADMIN;
        });


        // Create Users
        const normalUsers = userFactory.createMany(USERS);
        normalUsers.forEach(async (user) => {
            user.role = UserRoles.USER;
        });

        // Create Businesses
        const businessUsers = userFactory.createMany(BUSINESSES);
        businessUsers.forEach(async (user) => {
            user.role = UserRoles.BUSINESS;
        });

        // Save to the database
        const allUsers = [...adminUsers, ...normalUsers, ...businessUsers];
        await User.save(allUsers);
    }
}