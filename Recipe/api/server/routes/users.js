import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../Users.js'; 
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const router = require('express').Router();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Recipe App User Registration API',
      version: '1.0.0',
      description: 'API to help users register onto the website',
    },
    servers: [
      {
        url: 'http://localhost:5173',
        description: 'Development server',
      },
    ],
  },
  apis: ['./server/routes/users.js'], 
};

const specs = swaggerJsdoc(options);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(specs));

module.exports = router;


router.post("/register", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const userExists = await UserModel.findOne({ username });
      if (userExists) {
        return res.status(409).json({ message: "User already exists" });
      }
  
      const newUser = new UserModel({ username, password });
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error in user registration:", error);
      res.status(500).json({ message: "Failed to register user", error: error.message });
    }
  });


 
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await UserModel.findOne({ username });
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      res.json({ message: "Logged in successfully" });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Login failed", error: error.message });
    }
  });

export { router as userRouter };
