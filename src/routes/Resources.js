import express from 'express';
import { getProduct } from '../controllers/resources.js';

const router = express.Router();

// GET /api/colleges  →  list of all colleges from SnappyPoornima DB
router.get('/info/:id', getProduct);


export default router;