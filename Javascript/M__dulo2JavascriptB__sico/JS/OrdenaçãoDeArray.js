/*
let fruits = ['Maça', 'Uva', 'Laranja', 'Banana']

fruits.sort()
fruits.reverse()

for(fruit of fruits){
    console.log(fruit);
}
*/

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020},  
]

cars.sort((a, b) => {
    if(a.year > b.year){
        return 1
    }else if(a.year < b.year){
        return -1
    }else{
        return 0
    }
})

for(let car of cars){
    console.log(car);
}