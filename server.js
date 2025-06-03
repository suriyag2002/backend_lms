const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// ✅ MongoDB Atlas Connection
const mongoURI = 'mongodb+srv://Admin:S8U7KDPbXSbO7dHq@cluster.1i07b.mongodb.net/studentdb?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully!'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Routes
app.use('/api/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
