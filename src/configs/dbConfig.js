import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

export const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
     host: process.env.DB_HOST,
     dialect: 'mysql',
     logging: false
  });

// console.log("MYSQL_URL:", process.env.MYSQL_URL);

// export const db = new Sequelize(process.env.MYSQL_URL, {
//      dialect: 'mysql',
//      logging: false
// });

