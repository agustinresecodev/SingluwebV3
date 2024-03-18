import { faker } from "@faker-js/faker";
import { Business } from "../../models/Business";
import { Factory } from "./Factory";


export class BusinessFactory extends Factory<Business>{
    protected generate(): Business{
        return{
            name: faker.company.name(),
            direction: faker.location.direction(),
            city: faker.location.city(),
            state: faker.location.state(),
            zip: faker.location.zipCode(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
            web: faker.internet.url(),
            description: faker.lorem.paragraph(),
            profileImage: faker.image.imageUrl(),
            facebookProfile: faker.internet.url(),
            instagramProfile: faker.internet.url(),
            twitterProfile: faker.internet.url(),
            lng: faker.location.longitude(),
            lat: faker.location.latitude(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
            verified: true,
            verifiedAt: faker.date.recent(),
            mapsUrl: faker.internet.url()
        } as Business;
    }
}

