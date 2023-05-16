import { Request, Response } from "express";
import { join } from "path";
import { Sequelize } from 'sequelize';
import { ImageDb, ImageInstance } from '../models/Phrase.ts'

export const upload = async(req: Request, res: Response)=>{
    console.log(req.file)

    res.json({})
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
    res.json({})
}

export const uploadImage = async(req: Request, res: Response)=>{
    console.log(req.file)

    res.json({})
}