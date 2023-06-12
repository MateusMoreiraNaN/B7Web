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
                    tecnologias:['java', 'php', 'python']
                },
                {
                    nome: 'Mateus',
                    tecnologias:['node', 'css', 'JS']
                },
                {
                    nome: 'Tiago',
                    tecnologias:['jogo digital', 'ios', 'node']
                },
                {
                    nome: 'Fulano',
                    tecnologias:['adonis', 'java', 'c']
                },
                {
                    nome: 'Julia',
                    tecnologias:['C#', 'js', 'c++']
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
