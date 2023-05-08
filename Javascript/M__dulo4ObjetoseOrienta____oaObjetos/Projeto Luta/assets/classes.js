class Character{

    _life = 1
    maxLife = 1
    attack = 0
    defense = 0

    constructor(name){
        this.name = name
    }

    get life(){
        return this._life
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife
    }
}

class Knight extends Character{

    constructor(name){
        super(name)
        this.life = 100
        this.attack = 10
        this.defense = 8
        this.maxLife = this.life
    }
}

class Sorcerar extends Character {
    constructor(name){
        super(name)
        this.life = 80
        this.attack = 15
        this.defense = 3
        this.maxLife = this.life
    }
}

class LitterMonster extends Character {

    constructor(){
        super('Litter Monster')
        this.life = 40
        this.attack = 4
        this.defense = 4
        this.maxLife = this.life
    }
}

class BigMonster extends Character{
   
    constructor(){
        let big = 'oi'
        super('Big Monster')
        this.life = 120
        this.attack = 16
        this.defense = 6
        this.maxLife = this.life
    }
}

class Stage {

    constructor(fighter1, fighter2, fighter1E1, fighter2E1){
        
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1E1 = fighter1E1
        this.fighter2E1 = fighter2E1
    }

    start(){
        this.update()

        this.fighter1E1.querySelector('.attackbuttom').addEventListener('click', () =>{

        })
    }

    update(){
        this.fighter1E1.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1E1.querySelector('.bar').style.width = `${f1Pct}%`

        this.fighter2E1.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2E1.querySelector('.bar').style.width = `${f2Pct}%`
    }

    doAttack()
}

console.log('rodando');