class Person{

    static hands = 2
    age = 0
    

    constructor(name){
        this.name = name
    }

    sayHi(){
        console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands} mãos`);
    }
}

class cat{
    static patas = 4

    constructor(name){
        this.name = name
    }

    Hi(){
        console.log(`Oi, eu sou ${this.name} e tenho ${cat.patas} Patas`);
    }
}

let p1 = new Person("Bonieky")
p1.sayHi()

let c1 = new cat("Ana")
c1.Hi()







