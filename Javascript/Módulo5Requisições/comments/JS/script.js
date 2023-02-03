/*
async function clicou(){
    let req = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    
    let json = await req.json()
    alert(`Name: ${json[0].name}`)
    alert(`Email: ${json[0].email}`)
}

document.querySelector('#botao').addEventListener('click', clicou)
*/

async function readPosts(){
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = 'Carregando'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    let json = await response.json()

    if(json.length > 0){
        postArea.innerHTML = ''
        for(let i in json){
            let postHtml = `<div><h1>${json[i].name}</h1>${json[i].email}<h3>${json[i].body}</h3></div>`
            postArea.innerHTML += postHtml
        }


    }else{
        postArea.innerHTML = 'Nenhum comentario para exibir'
    }
}

document.querySelector('#inserButtom').addEventListener('click', ()=>{
    let name = document.querySelector('#titleField').value
    let body = document.querySelector('#bodyField').value

    if(name && email){
       addNewPost(name, body)
    }else{
        alert("Preecha todos os campos")
    }
})

readPosts()