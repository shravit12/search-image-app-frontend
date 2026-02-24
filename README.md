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
**🌐 Portfolio (optional):** [https://frontend-el.vercel.app]

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

```bash
cd server
npm install
npm run dev
```

---
## 👨‍💻 Author

Shravit  
Full Stack Developer 🚀  

🌐 Portfolio: https://www.devorbittech.in/  
🐙 GitHub: https://github.com/shravit12  

---

## ⭐ Support

If you liked this project, consider giving it a ⭐ on GitHub!
