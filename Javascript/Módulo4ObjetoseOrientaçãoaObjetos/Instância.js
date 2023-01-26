class Person{

    age = 0

    constructor(name, age){
        this.name = name
        //this.age = age
    }
}

let p1 = new Person("João")
let p2 = new Person("Maria")
let p3 = new Person("Mateus")

p1.age = 20
p2.age = 30
p3.age = 40

console.log(`${p1.name} tem ${p1.age} anos`)
console.log(`${p2.name} tem ${p2.age} anos`)
console.log(`${p3.name} tem ${p3.age} anos`)