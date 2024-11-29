import { Router } from "express";
import { new_product } from "../controller/Product";

const router: Router = Router();

router.get("/new", new_product as any);

export default router;
