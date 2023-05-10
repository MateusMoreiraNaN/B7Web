import React from "react"

const Header = () =>{
    return (
        <header>
            <h1>Titulo da página</h1>
        </header>
    )
}

const App = () =>{

    let name: string = 'Mateus'
    let n1: number = 10
    let n2: number = 3
    return(
        <div>
            Opa {name}, Tudo bem?

            {n1 * n2}
        
            (<a href="https://www.youtube.com/">Clique aqui</a>)
        </div>
    )
}

export default App
