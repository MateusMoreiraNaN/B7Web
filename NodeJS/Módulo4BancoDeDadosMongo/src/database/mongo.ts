const mongoose = require('mongoose')
import dotenv from 'dotenv'
dotenv.config()

mongoose.set('strictQuery', true)
export const mongoConnect = async ()=>{
    try{
        console.log('Conectando ao MongoDb...')
        await mongoose.connect(process.env.MONGO_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conectado!')
    }catch(error){
        console.log('Erro Conexão MongoDb' , error)
    }
}