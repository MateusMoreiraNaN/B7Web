let cores = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome: 'vermelho', qt: 15},
    {nome: 'branco', qt: 9}
]

cores.push('verde')
/*
for(let n = 0; n < cores.length; n++){
    console.log(cores[n]);
}
*/

//console.log(' ');

for(let i in cores){
    console.log(cores[i]);
}

console.log(' ');

cores.push('roxo')

for(let cor of cores){
    console.log(cor.nome + '-' + cor.qt);
}