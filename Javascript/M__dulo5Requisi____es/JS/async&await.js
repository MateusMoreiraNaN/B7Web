async function clicou(){
    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json()
    alert(`Titulo do primeiro post: ${json[0].title}`)

    alert("OPA, CLICOU")
    
}

document.querySelector('#botao').addEventListener('click', clicou)