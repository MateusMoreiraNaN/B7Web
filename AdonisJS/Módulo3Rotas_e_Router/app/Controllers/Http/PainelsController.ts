// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelsController {
    
    async index(){
        
        return {res:'painel do admin'}
        
    }

    async usuarios(){
        return{res: 'usuarios no banco de dados'}
  
    }

    async admin(){
        return{res: 'admin do sistema'}
    }

    async passwords(){
        return{res: 'senhas dos usuarios fica aqui.'}
    }
}
