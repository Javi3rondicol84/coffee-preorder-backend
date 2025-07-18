import express from 'express';
import { register, login } from '../controllers/authController.js';

export const authRoutes = express.Router();

authRoutes.post('/login', login);
authRoutes.post('/register', register);

