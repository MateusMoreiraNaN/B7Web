import express, { Request, Response } from "express";
import path from "path";
import dotenv from 'dotenv'
import  ApiRouter  from './routes/apiRouter'
import router from "./routes/apiRouter";

dotenv.config()

const server = express()

router.use(ApiRouter)
server.use((req: Request, res: Response)=>{
    res.status(400).send('Página não encontrada!')
})

server.listen(process.env.PORT)