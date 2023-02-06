import { Router, Request, Response } from 'express'

const router = Router()

router.get('/',(req: Request, res: Response)=>{
    //let user: string = 'Mateus'
    let user = {
        name: 'Bonieky',
        age: 90
    }

    let age: Number = 90
    let showOld: boolean = false
    if(age > 50){
        showOld = true
    }

    res.render('home',{
        user,
        senha: true,
        showOld,
        products:[
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto W', price: 20}

        ],
        listas:[
            'Dia1',
            'Toma café',
            'oi'
        ]
    })
})



router.get('/noticia/:slug',(req: Request, res: Response)=>{
    let slug = req.params.slug
    res.send(`Notícia: ${slug}`)
})

router.get('/voo/:origem-:destino', (req: Request, res: Response)=>{
    let { origem, destino } = req.params
    
    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`)
})

router.get('/nome',(req: Request, res: Response)=>{

    let nome: string = req.query.nome as string
    let idade: string = req.query.idade as string
    res.render('pages/nome',{
        nome,
        idade
    })
})

router.get('/idade',(req: Request, res: Response)=>{
    /*
    let mostrarIdade: boolean = false
    let idade: number = 0

    if(req.query.ano){
        let anoNascimento: number = parseInt(req.query.ano as string)
        let anoAtual: number = new Date().getFullYear()
        idade = anoAtual - anoNascimento
        mostrarIdade = true


    }
    */

    res.render('pages/idade',{
        //idade,
        //mostrarIdade
    })
})

router.post('/idade-resultado',(req: Request, res: Response)=>{
    let mostrarIdade: boolean = false
    let idade: number = 0

    if(req.body.ano){
        let anoNascimento: number = parseInt(req.body.ano as string)
        let anoAtual: number = new Date().getFullYear()
        idade = anoAtual - anoNascimento
        mostrarIdade = true


    }
    
    res.render('pages/idade',{
        idade,
        mostrarIdade
    })
})


export default router


