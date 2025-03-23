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

export const getAllTrips = async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from token
    const trips = await prisma.trip.findMany({
      where: { userId },
    });

    res.status(200).json({ trips });
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getTripById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const trip = await prisma.trip.findUnique({
      where: { id: Number(id), userId },
    });

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.status(200).json({ trip });
  } catch (error) {
    console.error("Error fetching trip:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

