import express, { Request, Response} from 'express';
import dotenv from 'dotenv';
import mainRoutes from './routes/apiRouter';
import bodyParser from 'body-parser'

dotenv.config();

const server = express();



//server.use(bodyParser.urlencoded({ extended: true }))


server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(express.json())



server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});



server.listen(process.env.PORT);