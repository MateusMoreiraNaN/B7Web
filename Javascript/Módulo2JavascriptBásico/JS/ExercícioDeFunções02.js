function calcularImovel(metragem, quartos){
    m2 = 3000
    let preco = 0

    switch (m2) {
        case 1:
        default:
            preco = metragem * m2
        break;
        case 2:
            preco = metragem * (m2 * 1.2)
        break
        case 3:
            preco = metragem * (m2 * 1.5)
        break
        case 4:
            preco = metragem * (m2 * 2.0)
        break
        case 5:
            preco = metragem * (m2 * 2.5)
        break
        case 6:
            preco = metragem * (m2 * 3.2)
        break
        case 7:
            preco = metragem * (m2 * 3.7)
        break
        case 8:
            preco = metragem * (m2 * 4.5)
        break
        case 9:
            preco = metragem * (m2 * 5.0)
        break
    }

    return preco
}

let metragem = 123
let quartos = 7
let preco = calcularImovel(metragem, quartos)
console.log(`A casa custa R$ ${preco}`);