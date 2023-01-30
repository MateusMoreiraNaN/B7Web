class Person{

    _age = 0
    steps = 0

    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    takeAStep(){
        this.steps++
    }

    get fullName(){
        return`${this.firstName} ${this.lastName}`
    }

    get age(){
        return this._age
    }

    set age(x){
        if(typeof x == 'number'){
            this._age = x 
        }
    }
}

let p1 = new Person("Maria", "Leite")
let p2 = new Person("Pedro", "Mota")
let p3 = new Person("Mateus", "Duarte")

p1.age = '46'


console.log(`${p1.fullName} tem ${p1.age} anos`);