import express from 'express';
import { getProduct } from '../controllers/resources.js';
import { getpostgres } from '../controllers/resources.js'

const router = express.Router();

// GET /api/colleges  →  list of all colleges from SnappyPoornima DB
router.get('/info/postgres', getpostgres);
router.get('/info/:id', getProduct);


export default router;