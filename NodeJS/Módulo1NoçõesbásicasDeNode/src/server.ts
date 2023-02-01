import express, { Request, Response} from 'express'

const server = express()
//npm run start

server.get('/',(req: Request, res: Response)=>{
    res.send('Olá Mundo!')
})

server.get('/noticia/:slug',(req: Request, res: Response)=>{
    let slug = req.params.slug
    res.send(`Notícia: ${slug}`)
})

server.get('/voo/:origem-:destino', (req: Request, res: Response)=>{
    let { origem, destino } = req.params
    
    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`)
})



server.listen(3000)