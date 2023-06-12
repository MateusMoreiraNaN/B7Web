//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {

    
    async index({view}){
        let dados = {
            usuario:{
                usuario: 'Alessandro Kobs',
                idade: 123,
                apelido: 'Kobs'
            }
        }
        return view.render('painel/home', dados)
        //return 'Hello World'
        
    }

    async sobre(){
        return'Sobre a google'
    }
}
