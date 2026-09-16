import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import healthRoutes from './routes/health.routes.js';
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

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    next(err);
  }
});

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

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;