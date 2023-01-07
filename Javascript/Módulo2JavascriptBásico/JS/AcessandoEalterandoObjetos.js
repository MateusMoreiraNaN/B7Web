let nome = 'Bonieky'
let nomes = ['Bonieky', 'Pedro'] // Array

let personagem = {//objetos
    nome: 'Bonieky',
    idade: 90,
    vida: 60,
    olhos: ['preto', 'azul'],
    pais: 'Brasil',
    caracteristicas: {
        stamina: 30,
        forca: 20
    },
    
}

personagem.nome = 'Pedro'

console.log(personagem.nome);

personagem.vida -= 5

console.log(personagem.vida);

personagem.caracteristicas.forca += 5

personagem.olhos.push('verde')

console.log(personagem.olhos);

let personagem2 = {
    nome: 'New',
    idade: 745,
    carros: [
        {modelo: 'Tesla', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ]
}

console.log(personagem2.carros[0].cor);