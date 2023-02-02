import express, { Request, Response} from 'express'
import path from 'path'
import mainRoutes from './routes/index'
import painelRoutes from './routes/painel'



const server = express()
//npm run start

server.use(express.static('public'))

server.use('/', mainRoutes)
server.use('/painel', painelRoutes)

server.use((req: Request, res: Response)=>{
    res.status(404).send('Pagina não encontrada!')
});


server.listen(3000)