import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { Product } from '../models/Product';
import { User } from '../models/User'



export const home = async (req: Request, res: Response)=>{
    
    let users = await User.findAll()
    
    
    //console.log("USUARIOS: ", JSON.stringify(users));

    // build + save
    /*
    const user = User.build({
        name: 'fulaninho',
        age: 25
    })
    await user.save()
    */

    






















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
        users
    });
};

export const novoUsuario = async (req: Request, res: Response) => {
    let { name, age } = req.body;

    if(name) {
        const newUser = User.build({ name });

        if(age) {
            newUser.age = parseInt(age);
        }

        await newUser.save();
    }

    res.redirect('/');
}

// create
    /*
    const user = await User.create({
        name: 'bot',
        age: 100
    })

    const user1 = await User.create({
        name: 'João',
        age: 57
    })
    */

//attributes: ['name', 'age']

        //where: {name: 'Paulo'}
        //where: {age: 55}
        //where:{
        //    age:{
         //       [Op.gte]: 10 // >= 40
         //   }
        //    }

/*
where:{
    age:{
        //[Op.gte]: 10
        
        //[Op.gt]: 40, // > 40
        //[Op.gte]: 40, // >= 40
        //[Op.lt]: 40, // < 40
        //[Op.lte]: 40 // <= 40
        

        
        //[Op.gte]: 40,
        //[Op.lte]: 70
        

        //[Op.between]: [40, 80]
        //[Op.notBetween]: [40, 80]
        //[Op.in]: [30, 55]
        //[Op.notIn]: [30, 55]
    },
    
    age:{
        [Op.or]: [30, 55]
    }
    
    
        [Op.or]:[
            {age: 55},
           {age: 20},
           {name: 'Mateus'}
        ]
    
    
   // name:{
        [Op.like]: '%a%'
    }
},

where:{
    age:[55,90]
}


order:[
    ['name', 'ASC'],
    ['age', 'DESC']
],


offset: 4,
limit: 2
*/