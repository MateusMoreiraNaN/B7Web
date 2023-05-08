let fruits = ['Maça', 'Uva', 'Laranja', 'banana']

fruits.push('Kiwi')

console.log(fruits);
console.log(fruits.length);

for(let fruit of fruits){
    console.log(fruit);
}

//fruits.pop()

console.log(fruits);

//fruits.shift()

console.log(fruits);

for(let fruit of fruits){
    console.log(fruit);
}

// .join
console.log(fruits.join(' -> '));

fruits[0] = 'Pêra'

fruits[fruits.length - 1] = 'tomate'

console.log(fruits);

