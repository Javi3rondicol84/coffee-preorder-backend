import express from 'express';
import { getCartItems, getCartItem, createCartItem, updateCartItem, deleteCartItem } from '../controllers/cartItemController.js';

export const cartItemRoutes = express.Router();

cartItemRoutes.get("/", getCartItems);
cartItemRoutes.get("/:id", getCartItem);
cartItemRoutes.post("/", createCartItem);
cartItemRoutes.put("/:id", updateCartItem);
cartItemRoutes.delete("/:id", deleteCartItem);
