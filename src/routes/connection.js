import express from 'express';
import { getAllConnections } from '../controllers/connection.js';

const router = express.Router();

router.get('/conn/:id', getAllConnections);


export default router;