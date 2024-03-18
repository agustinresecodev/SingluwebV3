import { Request, Response } from "express";
import { User } from "../models/User";
import { UserRoles } from "../constants/UserRoles";
import bcrypt from "bcrypt";


export const userController = {
    async getAllUsers(req: Request, res: Response) {
        try{
            const users = await User.find();
            res.status(200).json(users);
        }catch(error){
            res.status(500).json({message: "Internal server error"});
        }
    }

};