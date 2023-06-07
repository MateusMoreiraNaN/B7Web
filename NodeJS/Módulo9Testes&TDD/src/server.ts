import express, { Request, Response} from 'express';


const server = express();



//server.use(bodyParser.urlencoded({ extended: true }))




server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});



server.listen(process.env.PORT);