import { Request, Response } from "express";
import { Auth } from "../model/authModel";



export const register = async(req:Request, res: Response)=>{
    if(req.body.email && req.body.password){
        let { email, password } = req.body

        let hasUser = await Auth.findOne({where:{email}})

        if(!hasUser){
            let newUser = await Auth.create({email, password})
    
    
            res.json({id: newUser.id})
            
        }else{
            res.json({error:'E-mail já existe'})
        }
        return
    }

    res.json({error: 'E-mail e/ou senha não enviados'})


    
}

export const login = async(req: Request, res: Response)=>{
    if(req.body.email && req.body.password){
        let email: string = req.body.email
        let password: string = req.body.password

        let user = await Auth.findOne({
            where: {email, password}
        })

        if(user){
            res.json({ status: true })
            return
        }
    }

    res.json({ status: false })
}

export const list = async(req: Request, res: Response)=>{
    let users = await Auth.findAll()
    let list: String[] = []

    for(let i in users){
        list.push(users[i].email)
    }

    res.json({list})
}