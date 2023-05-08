import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);
router.post('/novo-usuario', HomeController.novoUsuario)
router.get('/addidade/:id', UserController.addIdade)
router.get('/addidade2/:id', UserController.addIdade2)
router.get('/delete/:id', UserController.deleteId)
router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);

export default router;