import express from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@repo/db/generated/prisma';
import dotenv from 'dotenv';
dotenv.config();

const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret_here';

const prisma = new PrismaClient();

const app = express();      
app.use(express.json());


app.post("signin", async (req, res) => {

    const token = jwt.sign({ userId: 1 }, jwtSecret);
    res.json({
        token,
        message: "User signed in successfully",
    });
});


app.post("/signup", async (req, res) => {
    res.json({
        message: "User signed in successfully",
    })
})





app.listen(3001, () => {
  console.log('HTTP Backend is running on port 3000');
});