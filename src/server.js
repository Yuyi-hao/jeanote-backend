import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT=process.env.PORT || 5001;
const ip = "http://127.0.0.1:"
const app = express();

connectDB();
// middleware
app.use(express.json());

// routes
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log(`Server listening at port ${ip}${PORT}....`)
});