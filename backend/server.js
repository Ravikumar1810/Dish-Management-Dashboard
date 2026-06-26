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

const allowedOrigins = [
  "http://localhost:5173",
  process.env.CLIENT_URL,
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

export const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST", "PATCH"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
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