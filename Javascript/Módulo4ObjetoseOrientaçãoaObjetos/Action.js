class Person{

    age = 0
    steps = 0

    constructor(name, age){
        this.name = name
        //this.age = age
    }

    takeAStep(){
        this.steps++
    }

    setAge(newAge){
        if(typeof newAge == 'Number'){
            this.age = newAge
        }else{
            console.log('Valor invalido');
        }

    }
}

let p1 = new Person("João")
let p2 = new Person("Maria")
let p3 = new Person("Mateus")

p1.age = 20
p2.age = 30
p3.age = 40

p1.takeAStep()
console.log(`Passos de ${p1.name}: ${p1.steps}`);
console.log(`Passos de ${p2.name}: ${p2.steps}`);