class Person{

    age = 0
    

    constructor(name){
        this.name = name
    }

    sayHi(){
        console.log(`${this.name} diz oi`);
    }
}

class Student extends Person{

    
    constructor(name, id){
        super(name)
        this.id = id
    }

    sayHello(){
        //console.log(`${this.name} diz oi para o novo estudante`);
        super.sayHi()
    }
}

let p1 = new Student('Bonieky', 1)

console.log(`${p1.name} tem ${p1.age} anos e matricula #${p1.id} `);

p1.age = 20

p1.sayHi()
p1.sayHello()

let p2 = new Student("Pedro", 2)

