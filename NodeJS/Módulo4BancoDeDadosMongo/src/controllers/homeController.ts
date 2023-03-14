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

    // alterar grupos de dados
    await User.updateMany(
        {age: {$gte:18}},
        {age: 18}
    )

    //alterar um dado
    await User.updateOne(
        {email: "pedroluiz50@gmail.com"},
        {age: 45}
    )

    await User.updateMany(
        {age: {$gte:18}},
        {age: 1000}
    )

    let pedro = await User.findOne({ email: 'pedroluiz50@gmail.com' })

    if(pedro){
        pedro.name.lastName = "Walter"
        pedro.age = 40

        await pedro.save()
    }

    
    
    

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

    let users = await User.find({}).sort({"name.firstName": 1})
    
    

    
    

    

    res.render('pages/home', {
        
        users
    });
};

export const novoUsuario = async(req: Request, res: Response)=>{
    let { firstName, lastName, email, age, interest } = req.body
    
    if(firstName){
        let newUser = new User()

        newUser.name.firstName = firstName
        
        if(lastName){
            newUser.name.lastName = lastName
        }
        if(email){
            newUser.email = email
        }
        if(age){
            newUser.age = parseInt(age)
        }
        if(interest){
            newUser.interest = interest
        }

        await newUser.save()
    }

    res.redirect('/')
}