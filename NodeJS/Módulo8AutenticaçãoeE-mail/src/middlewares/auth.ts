// middlewate vai decidir se algum vasi acessar uma rota/api ou não
import { Request, Response, NextFunction } from "express"
import { buffer } from "stream/consumers"
import { Auth } from "../model/authModel"

export const apiAuth = {
    private: async(req: Request, res: Response, next: NextFunction) =>{
        //Fazer verificação de auth
        
       
        

        let sucess = false

        if(req.headers.authorization){
            let hash: string = req.headers.authorization
            let decoded: string = Buffer.from(hash, 'base64').toString()
            let data: string[] = decoded.split(':')
            if(data.length === 2){
                let hashUser = await Auth.findOne({
                    where:{
                        email: data[0],
                        password: data[1]
                    }
                })
                if(hashUser){
                    sucess = true
                }
            }
            
        }
        if(sucess){
            next()
        }else{
            res.status(403)
            res.json({error: "Não autorizado"})

        }
        
    }
}