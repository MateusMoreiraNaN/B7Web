import { Request, Response } from "express"

import { Product } from '../models/Product'

export const home = (req: Request, res: Response)=>{
    //let user: string = 'Mateus'
    let user = {
        name: 'Bonieky',
        age: 90
    }

    let age: Number = 90
    let showOld: boolean = false
    if(age > 50){
        showOld = true
    }

    let list = Product.getAll()
    let expensiveList = Product.getPrice(12)

    res.render('pages/home',{
        user,
        senha: true,
        showOld,
        
        products: list,
        expensives: expensiveList,
        listas:[
            'Dia1',
            'Toma café',
            'oi'
        ]
    })
}