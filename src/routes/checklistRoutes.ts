import express from 'express';
import { createChecklist, getChecklists } from '../controllers/checklistController';

const router = express.Router();

router.post('/checklists', createChecklist);
router.get('/checklists', getChecklists);

export default router;