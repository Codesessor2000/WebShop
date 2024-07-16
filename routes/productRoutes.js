import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMIddleware.js";
import {
  createProductController,
  deleteProductController,
  filteredProductController,
  getProductController,
  getProductCountController,
  getProductListController,
  getSpecificProductController,
  productCategoryController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
import { updateCategoryController } from "../controllers/categoryController.js";
const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

router.get("/get-product", requireSignIn, isAdmin, getProductController);
router.get(
  "/get-product/:slug",
  requireSignIn,
  isAdmin,
  getSpecificProductController
);

router.get("/product-photo/:pid", productPhotoController);

router.delete(
  "/delete-product/:pid",
  requireSignIn,
  isAdmin,
  deleteProductController
);

router.post("/filter-product", filteredProductController);
router.get("/product-count", getProductCountController);
router.get("/product-list/:page", getProductListController);
router.get("/search/:keyword", searchProductController);
router.get("/related-product/:pid/:cid", relatedProductController);
router.get("/product-category/:slug", productCategoryController);

export default router;
