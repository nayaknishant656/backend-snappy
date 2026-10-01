import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import collegeRoutes from './routes/Collegedetails.js';
import resourcesRoutes from './routes/Resources.js';
import connectionsRoutes from './routes/connection.js';

const PORT = process.env.PORT || 8000;

const app = express();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/ci', collegeRoutes);
app.use('/api/resources', resourcesRoutes);
app.use('/api/connections', connectionsRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'you are going to be 00.1% of the WOrld in software Engineer',
    status: 'hii from nishant'
  });
});

// 404 handler
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Global error handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

// Connect to DB first, then start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to connect to DB, server not started:', err.message);
    process.exit(1);
  });

export default app;