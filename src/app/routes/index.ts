import express  from "express";
import { ProductRouter } from "../modules/Product/Product.router";

const router = express.Router();


router.use("/products", ProductRouter);

export default router;