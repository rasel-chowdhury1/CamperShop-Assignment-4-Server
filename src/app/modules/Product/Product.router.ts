import express  from "express";
import validateRequest from "../../middelwares/validRequest";
import { ProductController } from "./Product.controller";
import { ProductValidationsZod } from './Product.validationZod';

const router = express.Router();

router.post("/create-product", 
    // validateRequest(ProductValidationsZod.CreateProductValidationSchema),
    ProductController.CreateProduct);

router.get("/",
    ProductController.getAllProducts
)

router.get("/:id",
    ProductController.getSingleProduct
)

router.put(
    '/:id',
    ProductController.updateProduct
  );
  
  router.delete(
    '/:id',
    ProductController.deleteProduct
);
  

export const ProductRouter = router;