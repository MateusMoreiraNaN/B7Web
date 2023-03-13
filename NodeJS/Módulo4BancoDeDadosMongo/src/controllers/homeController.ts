import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User'

export const home = async(req: Request, res: Response)=>{

    


    let newUser = await User.create({
        name: {firstName: 'Monaliza', lastName: 'Moreira'},
        email: 'mona@paris.org',
        age: 200,
        interest: ['arte', 'pizza']

    })

    console.log(newUser);

    let newUser1 = new User()

    newUser1.name = {firstName: 'zarya', lastName: 'ow'},
    newUser1.email = 'zareyaOw004@gmail.com',
    newUser1.age = 38,
    newUser1.interest.push('Viajar', 'Comer', 'Tecnologia');

    let resul = await newUser1.save()
    console.log(resul);
    
    

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