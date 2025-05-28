# ☕ Coffee E-Commerce Backend

This is the backend for a coffee e-commerce project where users can browse coffee products and reserve them for in-store pickup.

## 🚀 Tech Stack

- **Node.js**
- **Express**
- **MySQL** (or your chosen database)
- **REST API**

## 📦 Features

- Get list of coffee products
- Pagination support
- Reserve products for pickup
- Serve data to the frontend built with React

## 📁 Project Structure
├── controllers/
├── routes/
├── models/
├── config/
├── app.js
└── package.json

## ⚙️ Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/coffee-ecommerce-backend.git

2. **Install dependencies**
    npm install

3. **Create a .env file with your environment variables:**
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=coffee_db
    PORT=3000

4. **Your package.json must include:**
    "type": "module"

5. **Start the server**
    npm start


📬 API Endpoints (Examples)
Method	Endpoint	        Description
GET	    /api/products	    Get all coffee products
POST	/api/reservations	Reserve a coffee product


📝 License
This project is licensed under the MIT License.


