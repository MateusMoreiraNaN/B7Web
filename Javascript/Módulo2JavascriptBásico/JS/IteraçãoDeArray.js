let fruits = ['banana', 'Laranja', 'Maça', "Pêra", 'Uva']

let bigFruits = fruits.filter((item) => {
    return item.length > 4
    /*
    if(item.length > 4){
        return true
    }else {
        return false
    }
    */
})

console.log(bigFruits);

// every()

let ok = fruits.every((value) => {
    return value.length > 3
})

if(ok){
    console.log(`Todos são maior que 3`);
}else{
    console.log(`Não são todos maior que 3`);
}

// some()

let alguns = fruits.some((value) => {
    return value.length > 3
})

if(alguns){
    console.log(`Algum item é maior que 3`);
}else{
    console.log(`Nenhum item é maior que 3`);
}

//includes

fruits.pop()

if(fruits.includes('Uva')){
    console.log('Tem uva sim!@');
}else{
    console.log('Não tem uva...');
}