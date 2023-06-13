//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {

    
    async index({view}){
        let dados = {
            
            usuario:{
                usuario: 'Alessandro Kobs',
                idade: 123,
                apelido: 'Kobs',
                tecnologias: ['html', 'css', 'js'],
                //tecnologiasTexto: ['html', 'css', 'js'].join(',')
            },
            

            usuarios:[
                {
                    nome: 'Pedro',
                    tecnologias:['java', 'php', 'python'],
                    admin: false
                },
                {
                    nome: 'Mateus',
                    tecnologias:['node', 'css', 'JS'],
                    admin: true
                },
                {
                    nome: 'Tiago',
                    tecnologias:['jogo digital', 'ios', 'node'],
                    admin: false
                },
                {
                    nome: 'Fulano',
                    tecnologias:['adonis', 'java', 'c']
                },
                {
                    nome: 'Julia',
                    tecnologias:['C#', 'js', 'c++'],
                    admin: true
                }
                {
                    nome: 'Lala',
                    tecnologias:['C#', 'js', 'c++'],
                    admin: true
                }
            ]
        }
        return view.render('painel/home', dados)
        //return 'Hello World'
        
    }

    async sobre(){
        return'Sobre a google'
    }
}
