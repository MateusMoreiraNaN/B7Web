// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelsController {

    protected users = [{
            id: 1,
            name: 'Alessandro Kobs'
        },
        {
            id: 2,
            name: 'Fulano da Silva'
        },
        {
            id: 3,
            name: 'Mateus'
        }
    ]
    
    async index(){
        
        return {res:'painel do admin'}
        
    }

    async usuarios(){
        //return{res: 'usuarios no banco de dados'}

        return {
            user: this.users
        }
  
    }

    async admin(){
        return{res: 'admin do sistema'}
    }

    async passwords(){
        return{res: 'senhas dos usuarios fica aqui.'}
    }

    async usuario({params}){
        let myReqUserId = params['id']

        
        let myUser = this.users.find(user => user.id == myReqUserId)
        if(myUser){
            return myUser
        }else{
            return {error: 'Nenhum usuário encontrado'}
        }
    }
}
