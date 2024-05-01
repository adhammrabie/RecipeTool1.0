import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from "./routes/users.js";
const app =express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("helloooo")
})






