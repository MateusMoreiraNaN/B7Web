import express, { Request, Response, ErrorRequestHandler } from 'express';
import path, { join } from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import { MulterError } from 'multer'
import mainRoutes from './routes/api';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

const errorHand: ErrorRequestHandler = (err, req, res, next)=>{
    res.status(400) // bad request

    if(err instanceof MulterError){
        res.json({error: err.code})
    }else{
        console.log( err )
        res.json({error: 'bad'})
        
    }
}
server.use(errorHand)

server.listen(process.env.PORT);