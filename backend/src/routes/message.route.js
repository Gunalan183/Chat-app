import express from "express";

const router = express.Router();

router.get("/users",protectRoute, getUsersForSidebar)

export default router;