let profession = 'policial'

console.log("Profissão: " + profession);

switch(profession){
    case 'fiscal':
        console.log('sua camisa será VERDE');
        break
    case 'bombeiro':
        console.log('sua camisa será VERMELHA')
        break
    case 'policial':
        console.log('sua camisa será AZUL')
        break
    default:
        console.log("sua camisa será PRETA");
        break
}

