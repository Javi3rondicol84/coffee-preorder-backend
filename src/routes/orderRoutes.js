import express from 'express';
import { getOrders, getOrder, createOrder, updateOrder, deleteOrder } from '../controllers/orderController.js';

export const orderRoutes = express.Router();

orderRoutes.get("/", getOrders);
orderRoutes.get("/:id", getOrder);
orderRoutes.post("/", createOrder);
orderRoutes.put("/:id", updateOrder);
orderRoutes.delete("/:id", deleteOrder);
