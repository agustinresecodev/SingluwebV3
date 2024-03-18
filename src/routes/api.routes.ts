import  express  from "express";
import usersRoutes from "./users.routes";
import { base } from "@faker-js/faker";
import baseRoutes from "./base.routes";
import businessesRoutes from "./businesses.routes";




const router = express.Router();

///////////// API ROUTES  /////////////

//BASE ROUTE
router.use("/",baseRoutes);
router.use("/users",usersRoutes);
router.use("/businesses",businessesRoutes);


export default router;