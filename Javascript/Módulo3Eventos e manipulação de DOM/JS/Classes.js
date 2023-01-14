function clicou(){
    
   const buttom = document.querySelector('buttom')

    if(buttom.classList.contains('azul')){
        buttom.classList.replace('azul', 'verde')
    }else{
        buttom.classList.replace('verde', 'azul')
    }

   
    
}

let botao = document.querySelector(".botao")



botao.addEventListener("click", () => {
    clicou()
});
