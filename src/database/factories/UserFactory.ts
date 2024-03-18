import { faker } from "@faker-js/faker";
import {User} from "../../models/User";
import {Factory} from "./Factory";
import bcrypt from "bcrypt";

export class UserFactory extends Factory<User>{
    protected generate(): User {
        return{
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('12345678', 10),
        } as User;    
    }
}