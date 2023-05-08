let carros = ['BMW', 'Ferrari', 'Mercedes']
//let x = carros[1]

console.log('1. ' + carros[1]);

carros[1] = 'Audi'

console.log('2. lista com Audi?')
console.log(carros);

carros.push('Volvo')

console.log('3. Lista com volvo');
console.log(carros);

carros.shift()

console.log(`4. itens no array ${carros.length}`);
