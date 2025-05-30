import express from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/userController.js';

export const userRoutes = express.Router();

userRoutes.get("/", getUsers);
userRoutes.get("/:id", getUser);
userRoutes.post("/", createUser);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);
