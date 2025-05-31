import express from 'express';
import { categoryRoutes } from '../routes/categoryRoutes.js';
import { userRoutes } from '../routes/userRoutes.js';
import { productRoutes } from './productRoutes.js';
import { orderRoutes } from './orderRoutes.js';
import { orderItemRoutes } from './orderItemRoutes.js';
import { cartRoutes } from './cartRoutes.js';
import { cartItemRoutes } from './cartItemRoutes.js';

export const router = express.Router();

router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use('/order', orderRoutes);
router.use('/orderItem', orderItemRoutes); 
router.use('/cart', cartRoutes); 
router.use('/cartItem', cartItemRoutes); 
