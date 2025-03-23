import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tripRoutes from "./src/routes/tripRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import { prisma } from "./prisma/prismaClient.js"; 

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
