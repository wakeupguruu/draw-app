import express from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@repo/db/generated/prisma';

const prisma = new PrismaClient();

const app = express();      
app.use(express.json());


app.post("signup", async (req, res) => {
    res.json({
        message: "User signed up successfully",
    })
});


app.post("/signin", async (req, res) => {
    res.json({
        message: "User signed in successfully",
    })
})





app.listen(3001, () => {
  console.log('HTTP Backend is running on port 3000');
});