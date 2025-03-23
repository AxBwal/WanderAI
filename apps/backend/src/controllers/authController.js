import { prisma } from "../../prisma/prismaClient.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ error: "Error registering user" });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(400).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: "Error logging in" });
    }
}

