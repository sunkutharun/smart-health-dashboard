import express from "express";
import { predictHealth, getHistory } from "../controllers/healthController.js";

const router = express.Router();

router.post("/predict", predictHealth);
router.get("/history", getHistory);

export default router;
