import { Router, Request, Response } from 'express'

const router = Router()

router.get('/',(req: Request, res: Response)=>{
    res.send('Home do Painel')
})

router.get('/noticia',(req: Request, res: Response)=>{
    res.send('Lista de notícias cadastradas')
})

/*
router.get('/voo/:origem-:destino', (req: Request, res: Response)=>{
    let { origem, destino } = req.params
    
    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`)
})
*/

export default router