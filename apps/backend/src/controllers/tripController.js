import { prisma } from "../../prisma/prismaClient.js"

export const getTrips = async (req, res) => {
  try {
    const trips = await prisma.trip.findMany();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ error: "Error fetching trips" });
  }
};

export const createTrip = async (req, res) => {
  try {
    const userId = req.user.id; 
    const { destination, budget } = req.body;
    if (!destination || !budget) {
      return res.status(400).json({ error: "Destination and budget are required" });
    }
    const trip = await prisma.trip.create({
      data: { destination, budget, userId },
    });

    res.status(201).json({ message: "Trip created successfully", trip });
  } catch (error) {
    res.status(500).json({ error: "Error creating trip" });
  }
};
