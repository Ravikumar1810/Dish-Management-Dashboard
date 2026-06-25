import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dishRoutes from "./routes/dishRoutes.js";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();

const app = express();

connectDB();

const httpServer = createServer(app);

export const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PATCH"]
    },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
  });
});

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Dish Dashboard API Running...");
});

const PORT = process.env.PORT || 5000;

app.use("/api/dishes", dishRoutes);

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});