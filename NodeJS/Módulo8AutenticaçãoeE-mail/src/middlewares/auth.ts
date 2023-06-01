// middlewate vai decidir se algum vasi acessar uma rota/api ou não
import { Request, Response, NextFunction } from "express"

export const Auth = {
    private: (req: Request, res: Response, next: NextFunction) =>{
        //Fazer verificação de auth

        let sucess = true
        if(sucess){
            next()
        }else{
            res.status(403)
            res.json({error: "Não autorizado"})

        }
    }
}