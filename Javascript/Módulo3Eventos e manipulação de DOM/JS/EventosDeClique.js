
function clicou(){
    let n1 = 5
    let n2 = 5
   
    console.log(n1 + n2);

    console.log('Clicou');

    
}

let botao = document.querySelector(".botao")

console.log(botao);

botao.addEventListener("click", () => {
    clicou()
});




