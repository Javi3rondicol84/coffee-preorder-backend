import express from 'express';
import { getCategories, getCategory } from '../controllers/categoryController.js';

export const categoryRoutes = express.Router();

categoryRoutes.get("/", getCategories);

categoryRoutes.get('/:id', getCategory);

