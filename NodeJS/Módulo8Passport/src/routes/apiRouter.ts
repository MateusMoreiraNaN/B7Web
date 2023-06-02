import { Router } from "express";

import * as ApiController from '../controllers/apiController'
import { apiAuth } from "../middlewares/auth";

const router = Router()



router.post('/register', ApiController.register)
router.post('/login', ApiController.login)

router.get('/list', apiAuth.private, ApiController.list)

export default router