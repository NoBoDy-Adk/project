import mongoose from 'mongoose';

const uri = 'mongodb+srv://Aadhi:A_D03052024@cluster0.mhxzs2g.mongodb.net/PROJECT';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));
