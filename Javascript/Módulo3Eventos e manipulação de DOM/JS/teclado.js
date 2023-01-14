/*
function apertou(){
    console.log("APERTOU!");
}

function segurou(){
    console.log("SEGUROU!");
}
*/

function soltou(event){
    console.log(event.code);
}

//document.addEventListener('keyup', soltou);

const input = document.querySelector('input')

input.addEventListener('keyup', soltou)