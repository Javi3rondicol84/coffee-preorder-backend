import express from 'express';
import { getOrderItems, getOrderItem, createOrderItem, updateOrderItem, deleteOrderItem } from '../controllers/orderItemController.js';

export const orderItemRoutes = express.Router();

orderItemRoutes.get("/", getOrderItems);
orderItemRoutes.get("/:id", getOrderItem);
orderItemRoutes.post("/", createOrderItem);
orderItemRoutes.put("/:id", updateOrderItem);
orderItemRoutes.delete("/:id", deleteOrderItem);
