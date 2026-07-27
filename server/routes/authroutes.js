import express from "express";
import { 
  register, 
  verifyEmail, 
  resendOTP, 
  login, 
  verifyLoginOTP, 
  forgotPassword, 
  resetPassword,
  getMe,
  updateProfile,
  updatePassword,
  saveCardDetails,
  deleteCardDetails
} from "../controllers/authcontroller.js";
import { protect } from "../middlewares/auth.js";


const router = express.Router();

router.post("/register", register);
router.post("/verify-email", verifyEmail);
router.post("/resend-otp", resendOTP);
router.post("/login", login);
router.post("/verify-login-otp", verifyLoginOTP);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/profile", protect, getMe);
router.patch("/profile", protect, updateProfile);
router.patch("/update-password", protect, updatePassword);
router.post("/save-card", protect, saveCardDetails);
router.delete("/delete-card", protect, deleteCardDetails);


export default router;