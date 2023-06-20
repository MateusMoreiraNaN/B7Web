import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
//import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/routes'
import  { Server }  from 'socket.io' 
import http from 'http'

dotenv.config()



const app = express()

//app.set('view engine', 'mustache')
//app.set('views', path.join(__dirname, 'views'))
//app.engine('mustache', mustache())


//app.set("view engine", "");
//app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '../public')))

//app.use(express.urlencoded({extended: true}))

//Rotas

app.use(mainRoutes)

const serverHttp = http.createServer(app)

export const io = new Server(serverHttp)






serverHttp.listen(process.env.PORT)

io.on('connection', (socket)=>{
    console.log("Conexão detectada...");
    
})



