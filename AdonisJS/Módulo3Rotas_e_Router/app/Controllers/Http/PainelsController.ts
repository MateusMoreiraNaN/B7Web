// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { Response } from "@adonisjs/core/build/standalone"

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
    
    async index({response}){
        //request.qs()//Query String
        /*
        return {
            res:'painel do admin',
            headers: request.headers(),
            language: request.language(),
            method: request.method(),
            ip: request.ip(),
            ips: request.ips(),
            qs: request.qs(),
            url: request.url(),
            completeUrl: request.completeUrl(),
            all: request.all(),
            only: request.only(['idade']),
            except: request.except(['sexo'])
        }
        */
       let json = { hello: 'world' }
       response.redirect().toPath('/api/painel/usuarios/1')
       response.status(201).send(json)
       
    }

    /*
    async usuarios(){
        //return{res: 'usuarios no banco de dados'}

        return {
            user: this.users
        }
  
    }
    */

    async admin(){
        return{res: 'admin do sistema'}
    }

    async passwords(){
        return{res: 'senhas dos usuarios fica aqui.'}
    }

    async usuarioById({params}){
        /*
        if(params['id']){
            let myReqUserId = params['id']

        
            let myUser = this.users.find(user => user.id == myReqUserId)
            if(myUser){
            return myUser
            }else{
            return {error: 'Nenhum usuário encontrado'}
            }
        }else{
            return{users: this.users}
        }
        */
       // clean code
       //se não existir 
       if(!params['id']){
            return{users: this.users}
       }
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

    async docs({params}){
        return params['*'][3]
    }
}
