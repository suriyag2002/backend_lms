const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// MongoDB Connection (Hardcoded URI)
const mongoURI = 'mongodb+srv://Admin:S8U7KDPbXSbO7dHq@cluster.1i07b.mongodb.net/studentdb?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
