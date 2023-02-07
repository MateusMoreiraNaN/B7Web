import { Request, Response } from "express"

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

    res.render('pages/home',{
        user,
        senha: true,
        showOld,
        products:[
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto W', price: 20}

        ],
        listas:[
            'Dia1',
            'Toma café',
            'oi'
        ]
    })
}