// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelsController {
    
    async index(){
        
        return 'painel do admin'
        
    }

    async usuarios(){
        return'usuarios no banco de dados'
  
    }
}
