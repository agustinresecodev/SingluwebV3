import express, { Application } from "express";
import cors from "cors";
import { corsOptions } from "./config/cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/api.routes"; 
import BaseRoutes from "./routes/base.routes";
// -----------------------------------------------------------------------------

dotenv.config();

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));

//Register Base Routes
app.use('/',BaseRoutes); 

//Register API Routes
app.use('/api',apiRoutes);



export default app;
