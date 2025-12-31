
# 💳 ZPay – Digital Wallet System

## 📌 Project Overview

**ZPay** is a modern digital wallet application that enables users to send, receive, and manage money securely.
It supports multiple user roles (Admin, Agent, User) and provides wallet transactions, authentication, and a responsive dashboard.

This project is a **full-stack MERN application** deployed with **Vercel (backend)** and **Netlify (frontend)**.

---

## 🚀 Features

* 🔐 **Authentication & Authorization** (JWT + HttpOnly cookies)
* 👤 **User Roles:** Admin, Agent, and Customer
* 💳 **Wallet Operations:** deposit, withdraw, transfer
* 📊 **Transaction History** with detailed insights
* 🛡️ **Secure APIs** with CORS & cookie-based auth
* 📱 **Responsive Frontend** built with React + Tailwind
* ⚡ **Real-time Transaction Updates**
* 🌐 **Deployment Ready** with Vercel & Netlify

---

## 🛠️ Technology Stack

* **Frontend:** React (Vite), Tailwind CSS, Axios
* **Backend:** Node.js, Express.js, TypeScript, Mongoose
* **Database:** MongoDB (Atlas)
* **Authentication:** JWT with HttpOnly Cookies
* **Deployment:** Netlify (Frontend) + Vercel (Backend)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/zpay.git
cd zpay
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
cp .env.example .env   
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env   
npm run dev
```

---

## 📝 Environment Variables

### Backend `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
FRONTEND_URL_PROD=https://your-frontend-url.netlify.app
```

### Frontend `.env`

```env
VITE_API_URL=https://your-backend-url.vercel.app/api/v1
```

---

## 📂 Project Structure

```
zpay/
│── backend/                # Express + TypeScript backend
│   ├── App/
│   │   ├── config/         # DB, env config
│   │   ├── modules/        # Features (auth, user, wallet, etc.)
│   │   ├── middleware/     # Error handlers, notFound, auth
│   │   └── utils/          # Helper functions
│   ├── app.ts              # Express config
│   ├── server.ts           # Server start
│
│── frontend/               # React + Vite frontend
│   ├── src/
│   │   ├── api/            # Axios instance
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page-level components
│   │   ├── routes/         # React Router
│   │   ├── context/        # Context API
│   │   └── main.tsx        # Entry point
│
│── README.md
```

---

## 🌍 Live Demo

* **Frontend (Netlify):** [https://digital-wallet-system-frontend-omega.vercel.app](https://digital-wallet-system-frontend-omega.vercel.app)
* **Backend (Vercel):** [https://digital-wallet-system-backend-inky.vercel.app](https://digital-wallet-system-backend-inky.vercel.app)

---

## ✅ Best Practices

* Modular & reusable components (frontend + backend)
* Centralized Axios instance with `withCredentials: true`
* Secure cookies (`httpOnly`, `sameSite: "none"`, `secure: true` in production)
* Clear error handling with middleware
* TypeScript for backend type safety
* Production-ready CORS config with multiple allowed origins

---

## 👨‍💻 Author

**ZPay** was built by \[Imran Ahmed]
🎯 Goal: Building secure, scalable, and user-friendly financial applications



