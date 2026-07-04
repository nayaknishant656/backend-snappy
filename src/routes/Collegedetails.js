import express from 'express';
import { getCollegeList } from '../controllers/collegeDetails.js';

const router = express.Router();

// GET /api/colleges  →  list of all colleges from SnappyPoornima DB
router.get('/', getCollegeList);

export default router;