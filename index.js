import express from 'express';
import dotenv from 'dotenv';
import { corsMiddleware }  from './src/configs/corsConfig.js';
// import { pool } from '../coffee-shop-backend/src/configs/dbConfig';
import { router } from './src/routes/router.js';
import { db } from './src/configs/dbConfig.js';
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // fallback to 3000 if PORT is not defined

app.use(express.json());

app.use(corsMiddleware);

app.use('/api', router);

async function initializeConnection() {
  try {
      await db.authenticate();
      await db.sync();
  }
  catch(error) {
      console.error('unable to connect to the databasee');
  }
}

initializeConnection();

app.get('/', (req, res) => {
  res.send('backend working!');
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
