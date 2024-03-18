import { SeederConfig } from "../../config/SeederConfig";
import { Business } from "../../models/Business";
import { BusinessFactory } from "../factories/BusinesFactory";
import { Seeder } from "./Seeder";

export class BusinessSeeder extends Seeder{
    protected async generate(): Promise<void> {
        const {BUSINESSES} = SeederConfig;

        const businessFactory = new BusinessFactory();

        // Create Businesses
        const businesses = businessFactory.createMany(BUSINESSES);

        // Save to the database
        await Business.save(businesses);
    }
}