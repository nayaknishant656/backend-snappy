import 'dotenv/config';
import express from 'express';
import connectDB from './config/db.js';
import healthRoutes from './routes/health.routes.js';
import collegeRoutes from './routes/Collegedetails.js';
import resourcesRoutes from './routes/Resources.js';
import connectionsRoutes from './routes/connection.js';

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  await connectDB();

  const app = express();

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
      message: 'Welcome to the Snappy Platform API',
      status: 'Server Started'
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