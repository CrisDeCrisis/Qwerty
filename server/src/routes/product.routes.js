import { Router } from "express";
import { productControllers } from "../controllers/product.controller.js";

export const productRoutes = Router();

productRoutes.post("/", productControllers.addProduct);
productRoutes.get("/", productControllers.getAllProducts);
productRoutes.get("/:id", productControllers.getProductById);
productRoutes.put("/:id", productControllers.updateProductById);
productRoutes.delete("/:id", productControllers.deleteProductById);