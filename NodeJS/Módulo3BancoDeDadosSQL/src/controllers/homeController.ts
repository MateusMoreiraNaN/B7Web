import { Request, Response } from 'express';
import { Op, where } from 'sequelize';

import { Product } from '../models/Product';
import { User, UserInstance } from '../models/User'



export const home = async (req: Request, res: Response)=>{

    let usuario1 = await User.findOne({
        where:{
            id: 4
        }
    })

    if(usuario1){
        console.log(`O usuário ${usuario1.name} possui ${usuario1.age} anos.`);
        
    }else{
        console.log('Usuário não encontrado.');
        
    }

    let usuario2 = await User.findByPk(1)

    if(usuario2){
        console.log(`O usuário ${usuario2.name} possui ${usuario2.age} anos.`);
        
    }else{
        console.log('Usuário não encontrado.');
        
    }

    const [ usuario, created ] = await User.findOrCreate({
        where:{ name: 'Bonieky' },
        defaults:{
            age: 90 
        }
    })

    if(created){
        console.log("Usuário criado com sucesso!");
        
    }else{
        console.log("Achamos o usuário");
        
    }

    console.log("Nome: ", usuario.name);
    

    console.log("USUARIO", usuario)
    console.log("CREATED", created);
    













/*
    await User.update({ age: 18 }, {
        where:{
            age:{
                [Op.lt]: 18
            }
        }
    })

    await User.update({ name: 'Seu Mateus' },{
        where:{
            id: 1
        }
    })
*/

    let results2 = await User.findAll({where: {name: 'oi'}})
    if(results2.length > 0){
        let usuario = results2[0]

        await usuario.destroy()
    }


    await User.destroy({
        where:{
            age:[100]
        }
    })

    let results = await User.findAll({where: {id: 7}})

    if(results.length > 0){
        let usuario: UserInstance = results[0]

        usuario.age = 70
        usuario.name = 'Testador alterado'
        await usuario.save()
    }
    

    
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