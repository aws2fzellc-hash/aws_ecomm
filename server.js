import express from "express";
import cors from "cors";
import pkg from "pg";
import OpenAI from "openai";

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// OpenAI connection
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Test route
app.get("/", (req, res) => {
  res.json({ status: "Backend is running!" });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
