let seuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let descricao = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2')
let lateral = document.querySelector('.d-1-right')
let numeros = document.querySelector('.d-1-3')

let etapaAtual = 0
let numero  = ""

function comecarEtapa(){
    let etapa = etapas[etapaAtual]

    let numeroHtml = ''

    for(let i=0;i<etapa.numeros;i++){
        if(i === 0){
            numeroHtml += '<div class="numero pisca"></div>'
        }else{
            numeroHtml += '<div class="numero"></div>'
        }
        
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHtml
}

function atualizar(){
    let etapa = etapas[etapaAtual]
    
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true
        }else{
            return false
        }
    })
    if(candidato.length > 0){
        candidato = candidato[0]
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`

        let fotosHTML = ''
        for(let i in candidato.fotos){
            fotosHTML += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="" />${candidato.fotos[i].legenda}</div>`
        }

        lateral.innerHTML = fotosHTML
    }else{
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = '<div class="aviso-grande">VOTO NULO</div>'
    }

}

function clicou(n){
   let elNumero = document.querySelector('.numero.pisca')
   if(elNumero !== null){
        elNumero.innerHTML = n
        numero = `${numero}${n}`
        elNumero.classList.remove('pisca')
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca')
        }else{
            atualizar()
        }
    
   }

}

function branco(){
    alert("clicou branco")
}

function corrige(){
    alert("clicou corrige")
}

function confirma(){
    alert("confirma")
}

comecarEtapa()