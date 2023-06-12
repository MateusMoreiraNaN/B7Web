// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelsController {

    protected users = [{
            id: 1,
            slug: 'ale',
            name: 'Alessandro Kobs'
        },
        {
            id: 2,
            slug: 'fufu',
            name: 'Fulano da Silva'
        },
        {
            id: 3,
            slug: 'mat',
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

    async usuarioById({params}){
        let myReqUserId = params['id']

        
        let myUser = this.users.find(user => user.id == myReqUserId)
        if(myUser){
            return myUser
        }else{
            return {error: 'Nenhum usuário encontrado'}
        }
    }

    async usuarioBySlug({params}){
        let myReqUserSlug = params['slug']

        
        let myUser = this.users.find(user => user.slug == myReqUserSlug)
        if(myUser){
            return myUser
        }else{
            return {error: 'Nenhum usuário encontrado'}
        }
    }
}
