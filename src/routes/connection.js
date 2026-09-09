import express from 'express';
import { getAllConnections, getConnectionmmap, getConnblog } from '../controllers/connection.js';

const router = express.Router();

router.get('/conn/:id', getAllConnections);
router.get('/connmap', getConnectionmmap);
router.get('/connblog/:id', getConnblog);


export default router;