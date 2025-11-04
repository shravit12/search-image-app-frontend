# 🌐 Image Search App — Full Stack Project

A full-stack image search application built with **Vite + React (frontend)** and **Node.js + Express + MongoDB (backend)**.  
Users can authenticate with Google, GitHub, or Facebook, search for images from **Unsplash API**, and view their personal search history and top searches globally.

---

## 🚀 Live Demo

**Frontend:** [https://your-frontend.vercel.app](https://your-frontend.vercel.app)  
**Backend API:** [https://search-image-app-backend.onrender.com](https://search-image-app-backend.onrender.com)

---

## 🧠 Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Passport.js (Google, GitHub, Facebook OAuth)
- express-session
- Unsplash API Integration
- CORS, dotenv

**Deployment**
- Backend → [Render](https://render.com)
- Frontend → [Vercel](https://vercel.com)
- Database → [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## ✨ Features

✅ **Authentication**
- Login with Google, GitHub, or Facebook  
- Secure session handling with express-session  

✅ **Image Search**
- Uses Unsplash API to fetch images dynamically  
- Displays results in responsive grid layout  

✅ **Search History**
- Saves user search history in MongoDB  
- Fetch previous searches anytime  

✅ **Top Searches**
- Tracks and shows popular global search terms  

✅ **Responsive UI**
- Built with Tailwind CSS and Vite  
- Optimized for desktop and mobile  

✅ **Secure Environment Config**
- All secrets stored in `.env` (not committed to Git)

---


---

## 🧩 Folder Structure



---

## 🔑 API Endpoints

| Route | Method | Description |
|--------|--------|-------------|
| `/auth/google` | GET | Start Google OAuth login |
| `/auth/github` | GET | Start GitHub OAuth login |
| `/auth/facebook` | GET | Start Facebook OAuth login |
| `/auth/current_user` | GET | Get logged-in user info |
| `/api/search` | POST | Search images using Unsplash |
| `/api/history` | GET | Fetch user’s search history |
| `/api/top-searches` | GET | Get global top searches |

---

## 🧠 Developer

**👤 Name:** Shravit Sharma  
**💼 Role:** Full Stack Developer (Assignment Project)  
**📧 Email:** sharmashravit@gmail.com  
**🌐 Portfolio (optional):** [https://your-portfolio-link.com](#)

---

## 💬 Notes
This project was developed as part of a **Full Stack Developer Assignment** demonstrating skills in:
- API integration  
- OAuth authentication  
- State management  
- Secure deployment (Render + Vercel)  
- Responsive frontend architecture

---

## 🏁 How to Run Locally

**Backend**
```bash
cd server
npm install
npm run dev




---

## 💼 **Part 2 — Assignment Submission Document (for company)**

You can either copy this into a Word/PDF or email body when submitting your assignment.

---

### **Full Stack Developer Assignment Submission**
**Candidate:** Shravit Sharma  
**Email:** sharmashravit@gmail.com  
**Submission Date:** _[Enter Date]_  
**Role Applied For:** Full Stack Developer  

---

### **Project Title:** Image Search Application

---

### **Overview**
The Image Search App is a full-stack project built as part of the company’s Full Stack Developer assignment.  
It demonstrates **OAuth-based authentication**, **RESTful API integration**, **database persistence**, and **frontend deployment**.

---

### **Key Functionalities**

1. **Authentication System**
   - OAuth login via Google, GitHub, and Facebook  
   - Session-based authentication with secure cookies  

2. **Search Feature**
   - Integrated Unsplash API to search for images  
   - Displays dynamic image results with pagination  

3. **User History & Analytics**
   - Stores each user's search history in MongoDB  
   - Shows global top searches across all users  

4. **Deployment**
   - Backend hosted on **Render**  
   - Frontend hosted on **Vercel**  
   - Database hosted on **MongoDB Atlas**  

---

### **Technology Stack**

| Layer | Tools / Frameworks |
|--------|---------------------|
| **Frontend** | React (Vite), Tailwind CSS, Axios |
| **Backend** | Node.js, Express.js, Passport.js |
| **Database** | MongoDB Atlas |
| **Auth** | OAuth 2.0 (Google, GitHub, Facebook) |
| **Deployment** | Render (API) & Vercel (UI) |

---

### **Project Architecture**



