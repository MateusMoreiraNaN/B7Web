import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User'

export const home = async(req: Request, res: Response)=>{

    //[Op.gt]: 40, // > 40
    //[Op.gte]: 40, // >= 40
    //[Op.lt]: 40, // < 40
    //[Op.lte]: 40 // <= 40

    //let usuarios = await User.find({})
    //console.log("USUARIOS", usuarios);

    /*
    let usuarios = await User.findOne({
        email: 'pedroluiz50@gmail.com'
    })
    */

    /*
    let usuarios = await User.find({
        "name.firstName": "Pedro"
    })
    */

   
    //console.log("USUARIOS", usuarios);

    //console.log('--------------------------');
    

    /*
    let usuariosIdade = await User.find({
        age:{ $gt: 100 }
    })
    */
    

    /*
    let usuariosIdade2 = await User.find({
       age:{ $gt: 2 }
    })
    */

    let usuariosIdade = await User.find({
        age:{ $gt: 18 }
    }).skip(2).limit(2)

    console.log(usuariosIdade);

    //let usuarios = await User.findAll


    
    

    
    

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        //usuarios
    });
};