// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://Aadhi:A_D03052024@cluster0.mhxzs2g.mongodb.net/PROJECT');
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1); 
  }
};

export { connectDB };

