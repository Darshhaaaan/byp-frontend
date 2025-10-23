import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" }
});

api.interceptors.request.use(
  (config) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export const registerUser = (data) => api.post("/auth/register", data);
export const loginUser = (data) => api.post("/auth/login", data);
export const changePassword = (data) => api.post("/auth/change-password", data);
export const getProducts = (category = "") => api.get(`/shop${category ? `?category=${category}` : ""}`);
export const getCategories = () => api.get("/shop/categories");
export const placeOrder = (data) => api.post("/shop/order", data);
export const getUserOrders = () => api.get("/user/orders");
export const createSupportTicket = (data) => api.post("/support/ticket", data);
export const getUserTickets = () => api.get("/support/tickets");

export default api;

