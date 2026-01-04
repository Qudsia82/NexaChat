import express from "express";
import { signin, signout, signup, updateProfile } from "../controllers/auth.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { arcjetProtection } from "../middlewares/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection)

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check",protectRoute,(req,res)=> res.status(200).json(req.user));

export default router;
