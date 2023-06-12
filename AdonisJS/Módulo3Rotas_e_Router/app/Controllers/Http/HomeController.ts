//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
    async index({view}){
        return view.render('painel/home')
        //return 'Hello World'
        
    }

    async sobre(){
        return'Sobre a google'
    }
}
