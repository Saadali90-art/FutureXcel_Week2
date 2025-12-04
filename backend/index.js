import express from "express";
import connectDb from "./connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import health from "./routes/health.js";

// Environmental variables configuration
dotenv.config();

// ENvironmntal Variables
const PORT = process.env.PORTNUMBER || 8000;
const DB_URL = process.env.DB_URL;

// Connect to MongoDB database
connectDb(DB_URL);

// Initialize Express server
const server = express();

// Enable CORS and parse JSON request bodies
server.use(cors({ origin: "*" }));
server.use(express.json());

// Routes Setup
server.get("/health", health);

server.listen(PORT, () => {
  console.log("Server Up..");
});
