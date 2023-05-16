import { Request, Response } from "express";
import { join } from "path";
import { unlink } from 'fs/promises'
import { Sequelize } from 'sequelize';
import { ImageDb, ImageInstance } from '../models/Phrase.ts'
import sharp from "sharp";

export const upload = async(req: Request, res: Response)=>{
    if(req.file){
        await sharp(req.file.path)
        .resize({
            fit: sharp.fit.fill,
            position: 'top'
        })
        .toFormat('jpeg')
        .toFile(`./public/midia/${req.file.filename}`)

        await unlink(req.file.path)

        res.json({image: `${req.file.filename}`})
    }else{
        res.status(400)
        res.json({error: 'Erro'})
    }
}

export const uploadFiles = async(req: Request, res: Response)=>{
    //const files = req.files as { [fielname: string]: Express.Multer.File[]}

    

    
    const files = req.files as {
        zip: Express.Multer.File[],
        user :Express.Multer.File[]
    }
    console.log(files.user);
    console.log(req.files);
    

    //console.log(req.files.user);
    //console.log(req.files);
    
}

export const uploadImage = async(req: Request, res: Response)=>{
    console.log(req.file)

    res.json({})
}