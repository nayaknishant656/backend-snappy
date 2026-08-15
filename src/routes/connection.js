import express from 'express';
import { getAllConnections } from '../controllers/connection.js';

const router = express.Router();

router.get('/connections', getAllConnections);

export default router;