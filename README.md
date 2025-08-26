# 🌿 React Plant Nursery Finder
A modern, responsive plant nursery discovery platform built with React and Node.js. This web application connects plant lovers and gardeners with nurseries and gardening stores, featuring advanced search, filtering, and exclusive deals.

### 🛠️ Built With

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Railway-3B7DFF?style=for-the-badge&logo=railway&logoColor=white" alt="Railway" />
</p>

---

### ✨ Features

🌱 Nursery Discovery - Browse over 500 nurseries and gardening stores  
🔍 Smart Search - Find nurseries by name, location, or category  
🎯 Advanced Filtering - Filter by city, category, and special offers  
🌿 Arabic Interface - Fully localized with RTL support for Arabic speakers  
📱 Mobile Responsive - Optimized for all device sizes  
💰 Exclusive Deals - Discover current discounts and promotions  
📍 Location-Based - Find nurseries in your city and district  
⚡ Real-time Updates - Dynamic content from MongoDB database

🚀 Demo
Live Demo: https://react-plant-nursery-website.vercel.app/
<p align="center">
  <a href="https://react-plant-nursery-website.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-%F0%9F%9A%80-green?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
  </a>
  <a href="#-features">
    <img src="https://img.shields.io/badge/Features-%F0%9F%94%8D-blue?style=for-the-badge" alt="Features">
  </a>
  <a href="#-built-with">
    <img src="https://img.shields.io/badge/Tech-React%20%7C%20Node.js%20%7C%20MongoDB-000?style=for-the-badge&logo=mongodb&logoColor=white" alt="Tech Stack">
  </a>
</p>

---

### 💡 Key Features

✅ **Smart Search** – Find nurseries by name, location, or category  
✅ **Advanced Filters** – Filter by city, category, or ongoing offers  
✅ **Exclusive Deals** – Browse current discounts, free delivery & more  
✅ **Fully Responsive** – Works seamlessly on mobile, tablet, and desktop 📱💻  
✅ **Arabic UI** – Native RTL design with full Arabic support  
✅ **Register a Nursery** – Submit your nursery to be listed  
✅ **Dynamic Offers Section** – Real-time display of active promotions  
✅ **Sponsored Nurseries** – Highlighted premium partners ✨

---

### 📋 Prerequisites
Before running this project, make sure you have:

- 🐙 Git  
- 📦 Node.js 18+ and npm  
- 🔧 Modern web browser (Chrome, Firefox, Safari, Edge)   

---

### 🚀 Quick Start

* Clone the repository

```bash
# Clone the repository
git clone https://github.com/MohamedZidane11/react-plant-nursery-website.git
cd react-plant-nursery-website
```
* Run backend server

1. Install backend dependencies

``` bash
cd backend
npm install
Create .env file
env
PORT=5000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```

2. Start backend server

``` bash
npm run dev
```
* Run frontend server
1. Install frontend dependencies

```bash
cd frontend
nmp install
```
2. Start development server

```bash
npm run dev
```

3. Open your browser 🌐    
Navigate to http://localhost:5173/

#### * This project requires a backend server for full functionality.

---

### 📁 Project Structure
react-plant-nursery-website/    
├── 📂 frontend/    
│   ├──📂 public/  
│   ├── 🖼️ images/  
│   └── 📄 favicon.ico  
│   ├──📂 src/     
│   │   ├── 📂 components/  
│   │   ├─ 📂 Layout/   
│   │   │   ├── 🎴 Footer.jsx  
│   │   │   └── 🔍 Header.jsx    
│   │   ├─ 📂 UI/   
│   │   │   ├── 🎴 Button.jsx  
│   │   │   └── 🔍 Card.jsx     
│   │   ├── 🎴 NurseryCard.jsx  
│   │   ├── 🎴 OfferCard.jsx  
│   │   ├── 🎴 RegisterNursery.jsx  
│   │   └── 🔍 SearchBar.jsx    
│   ├── 📂 data/    
│   │   ├── 📄 nurseries.js     
│   │   └── 📄 offers.js    
│   ├── 📂 pages/  
│   │   ├── 🎴 Contact.jsx  
│   │   ├── 🏠 Home.jsx     
│   │   ├── 🌿 Nurseries.jsx   
│   │   ├── 📝 NurseryDetail.jsx    
│   │   └── 💰 Offers.jsx  
│   ├── 🎴 App.css  
│   ├── 🎴 App.jsx  
│   ├── 📄 index.css    
│   ├── 🎴 main.jsx  
│   └── 🏠 index.html        
├── 📂 backend/     
│   ├── 📂 models/  
│   │   ├── 📄 Nursery.js   
│   │   └── 📄 Offer.js     
│   ├── 📂 routes/  
│   │   ├── 📄 nurseries.js     
│   │   └── 📄 offers.js       
│   └── 📄 server.js    
└── 📄 package.json

---

### 🎨 Customization
1. Updating Content     
- Edit nursery data in src/data/nurseries.js  
- Modify offers in src/data/offers.js     
- Update homepage content in src/pages/Home.jsx   

2. Configuration   
- Change styling in src/styles/   
- Customize components in src/components/     
- Modify page layouts in src/pages/      

3. Adding New Nurseries       
- Navigate to /register   
- Fill out the nursery registration form  
- Submit to add to the database 

---

### ☁️ Deployment   
1. Frontend Deployment  
- 🚀 Vercel - Automatic deployment from GitHub
- 🌐 GitHub Pages - Free static hosting

2. Backend Deployment
- 🚆 Railway - Easy Node.js and MongoDB hosting
- 🛢️ MongoDB Atlas - Cloud database hosting

3. 🌐 API Endpoints
The backend provides the following RESTful API endpoints:

```bash
GET /api/nurseries - Get all nurseries
GET /api/offers - Get all offers
POST /api/nurseries - Add a new nursery
POST /api/offers - Add a new offer
```
---
