import express from 'express';
import { getCarts, getCart, createCart, updateCart, deleteCart } from '../controllers/cartController.js';

export const cartRoutes = express.Router();

cartRoutes.get("/", getCarts);
cartRoutes.get("/:id", getCart);
cartRoutes.post("/", createCart);
cartRoutes.put("/:id", updateCart);
cartRoutes.delete("/:id", deleteCart);
