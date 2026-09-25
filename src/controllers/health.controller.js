import mongoose from 'mongoose';
import { sql } from '../config/db.js';

/**
 * @desc    Get API health status
 * @route   GET /api/health
 * @access  Public
 */
export const getHealthStatus = async (req, res) => {
  const mongoStatus = mongoose.connection.readyState;
  let pgStatus = 'disconnected';

  try {
    await sql`SELECT 1`;
    pgStatus = 'connected';
  } catch (err) {
    pgStatus = 'error';
  }

  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  const dbStatusMap = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };

  const status = {
    status: 'UP',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    db: {
      mongodb: {
        status: dbStatusMap[mongoStatus] || 'unknown',
        stateCode: mongoStatus
      },
      postgres: {
        status: pgStatus,
        host: process.env.PGHOST || '127.0.0.1',
        port: Number(process.env.PGPORT || 5432),
        database: process.env.PGDATABASE || 'postgres',
        user: process.env.PGUSER || 'postgres'
      }
    }
  };

  res.status(200).json(status);
};

