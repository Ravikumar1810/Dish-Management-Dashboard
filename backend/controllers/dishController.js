import Dish from "../models/Dish.js";
import { io } from "../server.js";

export const getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: dishes.length,
      dishes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const toggleDishStatus = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);

    if (!dish) {
      return res.status(404).json({
        success: false,
        message: "Dish not found",
      });
    }

    dish.isPublished = !dish.isPublished;

    await dish.save();

    io.emit("dishUpdated");

    res.status(200).json({
      success: true,
      dish,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};