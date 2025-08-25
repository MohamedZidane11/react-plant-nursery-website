// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nurseryRoutes from './routes/nurseries.js';
import offerRoutes from './routes/offers.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/nurseries', nurseryRoutes);
app.use('/api/offers', offerRoutes);

// Test route
app.get('/api', (req, res) => {
  res.json({ message: 'Nursery API is running 🌿' });
});

// Connect to DB & Start Server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📦 DB Connected: nurseries`);
    });
  })
  .catch((err) => {
    console.error('❌ DB Connection Error:', err);
  });