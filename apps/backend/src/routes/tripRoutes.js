import express from "express";
import { getTrips, createTrip,getAllTrips,getTripById,updateTrip,deleteTrip } from "../controllers/tripController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/gettrips", verifyToken, getTrips);
router.post("/createtrip", verifyToken, createTrip);
router.get("/getAllTrips", verifyToken, getAllTrips);
router.get("/:id", verifyToken, getTripById);
router.put("/:id", verifyToken, updateTrip);
router.delete("/:id", verifyToken, deleteTrip);

export default router;
