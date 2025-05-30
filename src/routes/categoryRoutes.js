import express from 'express';
import { getCategories, getCategory, createCategory, updateCategory, deleteCategory } from '../controllers/categoryController.js';

export const categoryRoutes = express.Router();

categoryRoutes.get("/", getCategories);

categoryRoutes.get('/:id', getCategory);

categoryRoutes.post("/", createCategory);

categoryRoutes.put("/:id", updateCategory);

categoryRoutes.delete("/:id", deleteCategory);

