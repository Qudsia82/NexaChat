import express from "express";
import { getAllChats, getAllContacts, getChatById, sendMessages } from "../controllers/message.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { arcjetProtection } from "../middlewares/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection,protectRoute)

router.get("/contacts",getAllContacts);
router.get("/chats",getAllChats);
router.get("/:id",getChatById);
router.post("/send/:id",sendMessages);

export default router;