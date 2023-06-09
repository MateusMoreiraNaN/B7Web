import passport from "passport";
import { Auth } from "../model/authModel";
import bcrypt from 'bcrypt'

export const createUser = async(email: string, password: string)=>{
    const hasUser = await Auth.findOne({ where:{email} })


    if(!hasUser){
        const hash = bcrypt.hashSync(password, 10)

        const newUser = await Auth.create({
            email,
            password: hash
        })
        return newUser
    }else{
        return new Error('E-mail já existe')
    }
}

export const findByEmail = async(email: string)=>{
    return await Auth.findOne({where:{email}})
}

export const matchPassword = (passwordText: string, encrypted :string)=>{
    return bcrypt.compareSync(passwordText, encrypted)
}

export const all = async()=>{
    return await Auth.findAll()
}