import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMIddleware.js";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoriesController,
  getSpecificCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
const router = express.Router();

router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

router.get("/get-category", getAllCategoriesController);
router.get("/get-category/:slug", getSpecificCategoryController);
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);
export default router;
