import express from "express";
import { gestDashboardStats } from "../controllers/historicos.js";

const router = express.Router();

router.get("/historicos", gestDashboardStats);

export default router;
