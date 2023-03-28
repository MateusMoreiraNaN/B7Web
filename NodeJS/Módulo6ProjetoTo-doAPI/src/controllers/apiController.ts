import { Request, Response } from "express";
import { join } from "path";
import { Sequelize } from 'sequelize'
import { Todo } from "../models/to-do"

export const all = async (req: Request, res: Response) =>{
    const list = await Todo.findAll()
}

export const add = async (req: Request, res: Response) =>{
    
}

export const update = async (req: Request, res: Response) =>{
    
}

export const remove = async (req: Request, res: Response) =>{
    
}