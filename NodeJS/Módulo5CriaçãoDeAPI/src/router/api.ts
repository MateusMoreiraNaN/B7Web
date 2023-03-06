import { Router } from "express";
import * as pingController from '../controller/pingController'

const router = Router()

router.get('/ping', pingController.ping)
router.get('/random', pingController.random)
router.get('/nome/:nome', pingController.nome)

router.post('/frases', pingController.createPhrase)

export default router