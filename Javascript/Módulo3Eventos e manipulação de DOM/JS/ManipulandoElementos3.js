function clicou(){
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')

    /*
    const newButtom = document.createElement('button')

    newButtom.innerHTML = 'Botão'

    ul.after(newButtom)
    */

    //AFTER = DEPOIS
    //BEFORE = ANTES 

    let newUl = document.createElement('ul')

    for(let i = 0; i <= 5; i++){
        let newLi = document.createElement('li')
        newLi.innerHTML = "Item add" + i
        newUl.append(newLi)
    }

    ul.after(newUl)

    //newUl.append()

  

    
}

let botao = document.querySelector(".botao")

console.log(botao);

botao.addEventListener("click", () => {
    clicou()
});
