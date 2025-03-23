import express from "express";
import { getTrips, createTrip } from "../controllers/tripController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/gettrips", verifyToken, getTrips);
router.post("/createtrip", verifyToken, createTrip);

export default router;
