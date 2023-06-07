import express, { ErrorRequestHandler, Request, Response} from 'express';
import dotenv from 'dotenv';
import mainRoutes from './routes/apiRouter';
import bodyParser from 'body-parser'
import passport from 'passport';

dotenv.config();

const server = express();



//server.use(bodyParser.urlencoded({ extended: true }))


server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(express.json())

server.use(passport.initialize())

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

const errorHandler: ErrorRequestHandler = (err, req, res, next)=>{
    if(err.status){
        res.status(err.status)
    }else{
        res.status(400)
    }
    if(err.message){
        res.json({error: err.message})
    }else{
        res.json({error: "Ocorreu um erro."})
    }

    
    
}

server.use(errorHandler)


server.listen(process.env.PORT);