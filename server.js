import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from './config/db.js';
import memberRoutes from "./routes/member.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("✅ Tufts ASA backend is running successfully!");
});

app.use("/api/members", memberRoutes);

connectDB();

app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
});
