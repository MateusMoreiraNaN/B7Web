// https://jsonplaceholder.typicode.com/posts

async function readPosts(){
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = 'Carregando...'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()

    if(json.length > 0){
        postArea.innerHTML = ''

        for(let i in json){
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}</div>`
            postArea.innerHTML += postHtml
        }
    }else{
        postArea.innerHTML = 'Nenhum post para exibir'
    }
}

async function addNewPost(title, body){
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    )

    document.querySelector('#titleField').value = ''
    document.querySelector('#bodyField').value = ''

    readPosts()
}

document.querySelector('#inserButtom').addEventListener('click', ()=>{
    let title = document.querySelector('#titleField').value
    let body = document.querySelector('#bodyField').value

    if(title && body){
       addNewPost(title, body)
    }else{
        alert("Preecha todos os campos")
    }
})

readPosts()