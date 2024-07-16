import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMIddleware.js";
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/test", requireSignIn, isAdmin, testController);

router.post("/forgot-password", forgotPasswordController);
//protected route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ OK: true });
});
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ OK: true });
});
router.put("/update-profile", requireSignIn, updateProfileController);
export default router;
