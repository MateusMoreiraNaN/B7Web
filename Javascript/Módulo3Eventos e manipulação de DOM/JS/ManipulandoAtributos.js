function clicou(){
    
    const input = document.querySelector('input')
    const botao = document.querySelector('.botao')

    //console.log(input);

    //console.log(input.getAttribute('placeholder'));

    /*
    if(input.hasAttribute('placeholder')){
        console.log('Tem placeholder SIM');
    }else{
        console.log('Não tem placeholder...');
    }
    */

    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password')
        botao.innerText = 'Mostra senha'
    }else{
        input.setAttribute('type', 'text')
        botao.innerText = 'Ocultar senha'
    }



    
}

let botao = document.querySelector(".botao")



botao.addEventListener("click", () => {
    clicou()
});
