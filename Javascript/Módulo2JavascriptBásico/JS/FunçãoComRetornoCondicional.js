function maiorDeIdade(idade){
    if(idade >= 18){
        return true
    }else{
        return false
    }
}

let idade = 12

let verificacao = maiorDeIdade(idade)

if(verificacao){
    console.log('é maior de idade');
}else{
    console.log('é menor de idade');
}