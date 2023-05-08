function clicou(){
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')

    //ul.children[0].append("(alterado)")

    //ul.innerHTML += "<li>Item adicionado</li>"

    
    let newLi = document.createElement("li")

    newLi.innerText = "Item adicionado"

    ul.appendChild(newLi)
    

    
}

let botao = document.querySelector(".botao")

console.log(botao);

botao.addEventListener("click", () => {
    clicou()
});
