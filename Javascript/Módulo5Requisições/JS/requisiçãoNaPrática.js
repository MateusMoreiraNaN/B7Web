//https://jsonplaceholder.typicode.com/posts

// Promise = Promessa

function clicou(){
    // GET, POST, PUT, DELETE
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(`Status: ${res.status}`);
            return res.json()
        })
        .then((json)=>{
            //console.log(data);
            //console.log(data[0].id);
            alert(`Titulo do primeiro post: ${json[0].title}`)
        })

    alert("OPA, CLICOU")
    
}
/*
function somar(x, y){
    return 19
}
*/

function inserir(){
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo de teste',
            userId: 2
        })
    }
    )
    .then((res)=>{
        return res.json()
    })
    .then((json)=>{
        console.log(json);
    })
}

document.querySelector('#botao').addEventListener('click', clicou)
document.querySelector('#inserir').addEventListener('click', inserir)