import { Request, Response } from "express";
import { join } from "path";
import { Sequelize } from 'sequelize';
import { Image, ImageInstance } from '../models/Phrase.ts'

export const upload = async(req: Request, res: Response)=>{
    console.log(req.file)

    res.json({})
}

export const uploadFiles = async(req: Request, res: Response)=>{
    const files = req.files as { [fielname: string]: Express.Multer.File[]}
    console.log(files.avatar);
    console.log(req.file);
    

    res.json({})
}
