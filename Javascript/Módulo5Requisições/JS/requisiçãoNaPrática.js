//https://jsonplaceholder.typicode.com/posts

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

document.querySelector('#botao').addEventListener('click', clicou)