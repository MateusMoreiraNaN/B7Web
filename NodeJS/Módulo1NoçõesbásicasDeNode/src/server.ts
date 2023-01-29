import express, { Request, Response} from 'express'

const server = express()
//npm run start
server.get('/',(req: Request, res: Response)=>{
    res.send('Olá Mundo!')
})

server.get('/contato',(req: Request, res: Response)=>{
    res.send('Está é a página de contato')
})

server.get('/sobre',(req: Request, res: Response)=>{
    res.send('Sobre mim')
})

server.get('/duvidas',(req: Request, res: Response)=>{
    res.send('Tira as duvidas')
})

server.listen(3000)