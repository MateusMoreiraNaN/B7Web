import { Router, Request, Response } from 'express'
import * as HomeControll from '../controllers/homeController'
import * as InfoControll from '../controllers/infoControlleer'
import * as UserControll from '../controllers/userController'

const router = Router()

router.get('/home', HomeControll.home)


router.get('/contato', InfoControll.contato)

router.get('/sobre', InfoControll.sobre)

router.get('/nome', UserControll.nome)

router.get('/idade', UserControll.idade)

router.post('/idade-resultado', UserControll.idadeResultado)

/*
router.get('/noticia/:slug',(req: Request, res: Response)=>{
    let slug = req.params.slug
    res.send(`Notícia: ${slug}`)
})

router.get('/voo/:origem-:destino', (req: Request, res: Response)=>{
    let { origem, destino } = req.params
    
    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`)
})
*/


export default router


