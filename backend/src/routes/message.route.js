import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js"
import { getUsersForSidebar } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users",protectRoute, getUsersForSidebar)
router.get("/:id", protectRoute, getMessages);

router.post("/send", protectRoute, sendMessage); // Assuming you have a sendMessage controller


export default router;