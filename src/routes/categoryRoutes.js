import express from 'express';
import { getCategories } from '../controllers/categoryController.js';

export const categoryRoutes = express.Router();

categoryRoutes.get("/", getCategories);

