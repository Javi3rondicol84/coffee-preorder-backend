import express from 'express';
import { categoryRoutes } from '../routes/categoryRoutes.js';
import { userRoutes } from '../routes/userRoutes.js';

export const router = express.Router();

router.use('/user', userRoutes);
router.use('/category', categoryRoutes);

