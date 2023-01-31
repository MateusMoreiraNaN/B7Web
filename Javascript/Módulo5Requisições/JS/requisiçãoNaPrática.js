//https://jsonplaceholder.typicode.com/posts

// Promise = Promessa

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            return res.json()
        })
        .then((json)=>{
            //console.log(data);
            //console.log(data[0].id);
            alert(`Titulo do primeiro post: ${json[0].title}`)
        })
    
}
/*
function somar(x, y){
    return 19
}
*/

document.querySelector('#botao').addEventListener('click', clicou)