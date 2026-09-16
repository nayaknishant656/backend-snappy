import express from 'express';
import { getCollegeList, getCollegeinfo, getCollegeById } from '../controllers/collegedetails.js';


const router = express.Router();

// GET /api/colleges  →  list of all colleges from SnappyPoornima DB
router.get('/', getCollegeList);
router.get('/college-info', getCollegeinfo);
router.get('/college-info/:id', getCollegeById);

export default router;