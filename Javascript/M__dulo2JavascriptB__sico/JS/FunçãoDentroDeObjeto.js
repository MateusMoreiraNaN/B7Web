let pessoa = {
    nome: 'Mateus',
    sobrenome: 'Moreira',
    idade: 90,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }

}

console.log(pessoa.nomeCompleto());