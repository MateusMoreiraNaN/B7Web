function clicou(){
    
    const p = document.querySelector('p')

    //p.style.backgroundColor = '#000'

    p.style.backgroundColor = '#3366ff'

    p.style.padding = '5.0rem'
    
}

let botao = document.querySelector(".botao")



botao.addEventListener("click", () => {
    clicou()
});
