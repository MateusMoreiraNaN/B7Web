

function soltou(e){
    if(e){
        //console.log(e.code); // DETALHE
        console.log(e.key);
        //console.log('TECLA APERTADA' + e.code);
        //console.log(e.shiftKey);
        //console.log('---');
    }
    
}

//document.addEventListener('keyup', soltou);

const input = document.querySelector('input')

input.addEventListener('keyup', soltou)