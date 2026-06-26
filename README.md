# Dish Management Dashboard

A modern and responsive **Dish Management Dashboard** built using **React.js, Express.js, MongoDB Atlas, Socket.IO, and Tailwind CSS**.

The application allows restaurant administrators to manage dish publishing status with **real-time synchronization** across multiple clients using Socket.IO.

---

## Live Demo

**Frontend (Vercel)**

https://dish-management-dashboard-kohl.vercel.app/

**Backend (Render)**

https://dish-management-dashboard.onrender.com

---

# Features

* Responsive Dashboard (Mobile, Tablet, Laptop & Desktop)
* Display Total Dishes
* Display Published Dishes
* Display Unpublished Dishes
* Publish Dish
* Unpublish Dish
* Real-time Dashboard Updates using Socket.IO
* Modern UI with Tailwind CSS
* REST API using Express.js
* MongoDB Atlas Integration
* Hosted on Vercel & Render

---

#  Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* Socket.IO Client
* React Icons
* React Hot Toast

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Socket.IO
* CORS
* dotenv

---

# Folder Structure

dish-management-dashboard

├── backend

│ ├── config

│ ├── controllers

│ ├── models

│ ├── routes

│ ├── server.js

│ └── package.json

│

├── frontend

│ ├── src

│ │ ├── components

│ │ ├── pages

│ │ ├── services

│ │ ├── socket.js

│ │ └── App.jsx

│ └── package.json

│

└── README.md

---

# Installation

## Clone Repository

git clone https://github.com/Ravikumar1810/Dish-Management-Dashboard.git

---

## Backend

cd backend

npm install

npm run dev

---

## Frontend

cd frontend

npm install

npm run dev

---

# Environment Variables

Backend

PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

Frontend

VITE_API_URL=http://localhost:5000/api

VITE_SOCKET_URL=http://localhost:5000

---

# API Endpoints

GET

/api/dishes

Returns all dishes.

PATCH

/api/dishes/:id

Toggle Publish/Unpublish Status.

---

# Real-Time Functionality

Whenever a dish is published or unpublished:

* Database updates immediately.
* Socket.IO broadcasts the update.
* Every connected client refreshes automatically.
* No manual page refresh required.

---

# Responsive Design

The application is fully responsive and optimized for:

* Mobile
* Tablet
* Laptop
* Desktop

---

# Deployment

Frontend

Vercel

Backend

Render

Database

MongoDB Atlas

---

#  Future Improvements

* Authentication & Authorization
* Search & Filter Dishes
* Pagination
* Image Upload
* Category Management
* Admin Roles
* Analytics Dashboard

---

# Developed By

**Ravikumar N K**

Frontend & Full Stack Developer

Bangalore, India
