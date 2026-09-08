import express from 'express';
import { getAllConnections, getConnectionmmap } from '../controllers/connection.js';

const router = express.Router();

router.get('/conn/:id', getAllConnections);
router.get('/connmap', getConnectionmmap);


export default router;