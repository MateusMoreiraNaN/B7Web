import { Router } from 'express';

import * as apiController from '../controllers/apiController'

const router = Router();

router.get('/todos', apiController.all)
router.post('/todo', apiController.add)
router.put('/todo/:id', apiController.update)
router.delete('/todo/:id', apiController.remove)

export default router;