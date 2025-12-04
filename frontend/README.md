## Full Stack Project – React, Vite, Tailwind, Express.js, MongoDB

This project is a complete full-stack web application built using a modern JavaScript tech stack. The frontend runs on React (with Vite) and Tailwind CSS, while the backend is powered by Express.js and connected to a MongoDB database. The aim is to create a clean, scalable, and production-ready project skeleton for full-stack development.

## Tech Stack

Frontend
React + Vite
Tailwind CSS
Node Modules

Backend
Node.js
Express.js

Database
MongoDB

## Project Structure

/project-root
│
├── /fontend # React + Vite frontend
│ ├── src
│ ├── public
│ └── tailwind.config.js
│
├── /backend # Express.js backend
│ ├── routes
│ ├── models # MongoDB/Mongoose models
│ └── index.js

🔧 Installation & Setup

1. Install Dependencies

Frontend:
cd frontend
npm install

Backend:

cd backend
npm install

2. Environment Variables
   Create a .env file inside the server folder:

PORT=8000
DB_URL=your_mongodb_connection_string

3. Run the Project
   Start frontend (React + Vite):
   cd frontend
   npm run dev

Start backend (Express server):
cd backend
npm run dev
