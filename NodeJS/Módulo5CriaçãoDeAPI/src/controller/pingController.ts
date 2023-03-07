import { Request, Response } from "express";
import { Phrase, PhraseInstance } from '../models/Phrase'

export const ping = (req: Request, res: Response) =>{
    res.json({pong: true})
}

export const random = (req: Request, res: Response)=>{
    let  nRand: number = Math.floor( Math.random() * 84 )

    res.json({number: nRand})
} 

export const nome = (req: Request, res: Response)=>{
    let nome: string = req.params.nome
    res.json({nome}) 
}

export const createPhrase = async (req: Request, res: Response)=>{
    
    let { author, txt } = req.body

    let newPhrase =  await Phrase.create({
        author, txt
    })

    res.json({ id: newPhrase.id, author, txt })
    

   
}

export const listPhrase = async (req: Request, res: Response)=>{

    let list = await Phrase.findAll()

    res.json({ list })
}

export const getPhrase = async (req: Request, res: Response)=>{

   let { id } = req.params

   let phrase = await Phrase.findByPk(id)
   if(phrase){
        res.json({ phrase })
   }else{
        res.json({error: 'Frase não encontrada'})
   }

    
}