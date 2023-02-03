async function clicou(){
    let req = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    
    let json = await req.json()
    alert(`Titulo do primeiro post: ${json[0].email}`)
}

document.querySelector('#botao').addEventListener('click', clicou)