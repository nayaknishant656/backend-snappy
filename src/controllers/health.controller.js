import mongoose from 'mongoose';

/**
 * @desc    Get API health status
 * @route   GET /api/health
 * @access  Public
 */
export const getHealthStatus = async (req, res) => {
  const dbStatus = mongoose.connection.readyState;
  
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
      status: dbStatusMap[dbStatus] || 'unknown',
      stateCode: dbStatus
    }
  };

  if (dbStatus === 1) {
    res.status(200).json(status);
  } else {
    res.status(503).json(status);
  }
};
