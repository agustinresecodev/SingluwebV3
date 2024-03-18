import { Request,Response } from "express";
import { Business } from "../models/Business";


export const businessController = {
    async getAllBusinesses(req: Request, res: Response) {
        try{
            const businesses = await Business.find();
            res.status(200).json(businesses);
        }catch(error){
            res.status(500).json({message: "Internal server error"});
        }
    }
}