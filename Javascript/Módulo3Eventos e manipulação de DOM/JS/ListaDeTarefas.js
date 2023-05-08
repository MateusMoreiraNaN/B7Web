const input = document.querySelector('input')
const lista = document.querySelector('ul')



function handlekUp(e){
    if(e.key === 'Enter'){
        let newLi = document.createElement("li")

        newLi.innerText = input.value
    
        lista.appendChild(newLi)

       input.value = ''
    }
}

input.addEventListener('keyup', handlekUp)