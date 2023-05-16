import { Request, Response } from "express";
import { join } from "path";
import { Sequelize } from 'sequelize';
import { ImageDb, ImageInstance } from '../models/Phrase.ts'
import sharp from "sharp";

export const upload = async(req: Request, res: Response)=>{
    console.log(req.file)

    res.json({})
}

export const uploadFiles = async(req: Request, res: Response)=>{
    //const files = req.files as { [fielname: string]: Express.Multer.File[]}

    if(req.file){
        await sharp(req.file.path).resize(500).toFormat('jpeg').toFile(`./public/media/${req.file.filename}.jpg`)

        res.json({})
    }else{
        res.status(400)
        res.json({error: 'Erro'})
    }

    
    const files = req.files as {
        zip: Express.Multer.File[],
        user :Express.Multer.File[]
    }
    console.log(files.user);
    console.log(req.files);
    

    //console.log(req.files.user);
    //console.log(req.files);
    res.json({})
}

export const uploadImage = async(req: Request, res: Response)=>{
    console.log(req.file)

    res.json({})
}