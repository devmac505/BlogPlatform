const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Route files
const blogs = require('./routes/blogs');
const auth = require('./routes/auth');

const app = express();

// Body parser
app.use(express.json());

// Enable CORS with specific origin
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/blogs', blogs);
app.use('/api/auth', auth);

// Home route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
