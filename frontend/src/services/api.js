import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getDishes = () => API.get("/dishes");

export const toggleDishStatus = (id) =>
  API.patch(`/dishes/${id}`);