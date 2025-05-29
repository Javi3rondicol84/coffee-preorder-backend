import express from 'express';
import dotenv from 'dotenv';
import { corsMiddleware } from '../coffee-shop-backend/src/config/corsConfig';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // fallback to 3000 if PORT is not defined

app.use(express.json());

app.use(corsMiddleware);

// Endpoint
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
