import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/ratelimiter.js";

dotenv.config();

const PORT=process.env.PORT || 5001;
const ip = "http://127.0.0.1:"
const app = express();

// middleware
app.use(express.json()); // middle ware parse json data
app.use(ratelimiter);
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}  response:[${res.statusCode}] request`);
    next();
});


// routes
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening at port ${ip}${PORT}....`)
    });
});