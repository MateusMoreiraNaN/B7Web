import { Router } from "express";
import * as pingController from '../controller/pingController'

const router = Router()

router.get('/ping', pingController.ping)
router.get('/random', pingController.random)
router.get('/nome/:nome', pingController.nome)

router.post('/frases', pingController.createPhrase)
router.get('/frases', pingController.listPhrase)
router.get('/frase/aleatoria', pingController.randomPhrase)
router.get('/frase/:id', pingController.getPhrase)
router.put('/frase/:id', pingController.updatePhrase)
router.delete('/frase/:id', pingController.deletePhrase)


export default router