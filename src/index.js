import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import healthRoutes from './routes/health.routes.js';
import collegeRoutes from './routes/Collegedetails.js';
import resourcesRoutes from './routes/Resources.js';
import connectionsRoutes from './routes/connection.js';

const PORT = 8000;

const MONGODB_URI =
  'mongodb+srv://mobideas2:nishantnayak2297@cluster0.05pqoma.mongodb.net/SnappyPoornima';

const CORS_ORIGIN = '*';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    return conn;
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

const startServer = async () => {
  await connectDB();

  const app = express();

  const corsOptions = {
    origin: (origin, callback) => {
      if (CORS_ORIGIN === '*' || !origin) {
        callback(null, true);
        return;
      }

      const origins = CORS_ORIGIN
        .split(',')
        .map((o) => o.trim());

      if (origins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'OPTIONS'
    ],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept'
    ]
  };

  app.use(cors(corsOptions));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.url}`
    );
    next();
  });

  app.use('/api/health', healthRoutes);
  app.use('/api/ci', collegeRoutes);
  app.use('/api/resources', resourcesRoutes);
  app.use('/api/connections', connectionsRoutes);

  app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to the Snappy Platform API'
    });
  });

  app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  });

  app.use((err, req, res, next) => {
    const statusCode =
      res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode).json({
      message: err.message,
      stack: err.stack
    });
  });

  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);

    server.close(() => {
      process.exit(1);
    });
  });
};

startServer();