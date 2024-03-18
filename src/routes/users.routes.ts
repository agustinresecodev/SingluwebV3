import express from "express";

import { userController } from "../controllers/userController";




/// Create const with express router
const router = express.Router();

//get all users
router.get("/",userController.getAllUsers);


export default router;