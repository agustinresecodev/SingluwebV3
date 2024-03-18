import express from "express";
import { businessController } from "../controllers/businessController";

const router = express.Router();

//get all businesses
router.get("/",businessController.getAllBusinesses);

export default router;
