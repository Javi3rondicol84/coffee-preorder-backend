import express from 'express';
import { categoryRoutes } from '../routes/categoryRoutes.js';

export const router = express.Router();

router.use('/category', categoryRoutes);

