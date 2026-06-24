import express from "express";
import {
  getAllDishes,
  toggleDishStatus,
} from "../controllers/dishController.js";

const router = express.Router();

router.get("/", getAllDishes);

router.patch("/:id", toggleDishStatus);

export default router;