function porcentagem(x, y) {
    return (x / y) * 100
}

let x = 40
let y = 10
let pct = porcentagem(x, y)
console.log(`${pct}% de ${x} é ${y}`);