import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send("hello");
});

app.use('/users', userRouter);

app.use(function(req, res) {
    res.status(404).send("Not a Route!");
});

mongoose.connect("mongodb+srv://adhammrabie2003:adham12@cluster0.mrzscys.mongodb.net/");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("MongoDB connected successfully");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
