import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // backend URL
});

// Get sales data
export const getSalesData = () => API.get("/api/sales");

export default API;