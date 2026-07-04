import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import healthRoutes from './routes/health.routes.js';
import collegeRoutes from './routes/Collegedetails.js';

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigin = process.env.CORS_ORIGIN || '*';
    // Allow requests with no origin (like mobile apps or curl requests)
    if (allowedOrigin === '*' || !origin) {
      callback(null, true);
    } else {
      const origins = allowedOrigin.split(',').map(o => o.trim());
      if (origins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
};

app.use(cors(corsOptions));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log requests in development
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });
}

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/colleges', collegeRoutes);

// Root greeting route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Snappy Platform API' });
});

// 404 handler
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
