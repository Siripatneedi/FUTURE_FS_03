# Restaurant Management System - Backend

## 📌 Project Overview

The Restaurant Management System Backend is a REST API built using Node.js, Express.js, and MongoDB. It manages restaurant-related operations such as customer registration, authentication, menu management, and order handling. The backend provides secure API endpoints that can be integrated with a web or mobile frontend.

---

## 🚀 Features

- User Registration and Login
- Secure Authentication
- MongoDB Database Integration
- RESTful API Architecture
- MVC Folder Structure
- CRUD Operations
- Error Handling
- Environment Variable Configuration

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS
- Nodemon

---

## 📁 Project Structure

```
restaurant-backend/
│
├── config/
│   └── db.js
│
├── controllers/
│
├── models/
│
├── routes/
│
├── server.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/restaurant-backend.git
```

### 2. Navigate to Project Folder

```bash
cd restaurant-backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment File

Create a `.env` file in the root directory.

Example:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 5. Start the Server

```bash
npm run dev
---

## 🌐 Server

The backend server runs on

```
http://localhost:5000
```

---

## 📦 API Endpoints

### Authentication

- POST /api/auth/register
- POST /api/auth/login

### Restaurant

- GET /api/restaurants
- POST /api/restaurants
- PUT /api/restaurants/:id
- DELETE /api/restaurants/:id

---

## 🗄️ Database

MongoDB is used as the database.

Connection is established using Mongoose.

---

## 📌 Future Enhancements

- JWT Authentication
- Role-Based Access Control
- Online Payment Integration
- Food Image Upload
- Order Tracking
- Admin Dashboard
- Customer Reviews

---

## 👨‍💻 Author

**Sri Satya Siri Patneedi**

GitHub: https://github.com/Siripatneedi

LinkedIn: https://www.linkedin.com/in/sri-satya-siri-patneedi-2b1182324

Email: srisatyasirip@gmail.com

---
