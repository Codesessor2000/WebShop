import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMIddleware.js";
import {
  changeOrderStatusController,
  createOrderController,
  getAllOrderController,
  getOrderController,
} from "../controllers/orderController.js";
const router = express.Router();

router.post("/create-order", requireSignIn, createOrderController);
router.get("/get-orders", requireSignIn, getOrderController);
router.get("/get-all-orders", requireSignIn, isAdmin, getAllOrderController);
router.put(
  "/change-status/:orderId",
  requireSignIn,
  isAdmin,
  changeOrderStatusController
);

export default router;
