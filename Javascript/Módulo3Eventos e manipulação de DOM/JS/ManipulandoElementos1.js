function clicou(){
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')

    //ul.innerHTML += "<li>Item alterado</li>"

    ul.children[0].innerHTML = "<li>Item alterado</li>"

    ul.children[1].outerHTML = "<strong>Alterado</strong>"

    
}

let botao = document.querySelector(".botao")

console.log(botao);

botao.addEventListener("click", () => {
    clicou()
});
