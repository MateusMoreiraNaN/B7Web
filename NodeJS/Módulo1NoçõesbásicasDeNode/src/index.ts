//const Matematica = require('./Matematica')

//import {} from './Matematica'

import Matematica from "./Matematica"
import validator from 'validator'

let n1: number = 10
let n2: number = 5



console.log(`SOMA: ${Matematica.soma(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${Matematica.subtrair(n1, n2)}`);
console.log(`MULTIPLICAÇÃO: ${Matematica.multiplicar(n1, n2)}`);

console.log(' ');

let ip = '127.999.0.1'
let ip2 = '1564986419198419811564964'


console.log(validator.isEmail('suporte@b7web.com.br'));
console.log(validator.isEmail('fgdgdhhddfgdhfghddhdsd'));
console.log(validator.isIP(ip));
console.log(validator.isIP(ip2));







