import dotenv from "dotenv";
import mongoose from "mongoose";

import Dish from "../models/Dish.js";
import dishes from "./dishes.js";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Dish.deleteMany();

    await Dish.insertMany(dishes);

    console.log("Data Seeded Successfully");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

seedData();