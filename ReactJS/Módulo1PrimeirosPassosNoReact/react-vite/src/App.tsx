import React from "react"
import { Apex } from './components/Apex'

const Header = () =>{
    return (
        <header>
            <h1>Titulo da página</h1>
            <br />
        </header>
    )
}

const F = () =>{
    return(
        <footer>
            <br />
            <h2>Final</h2>
        </footer>
    )
}

const App = () =>{

    let name: string = 'Mateus'
    let n1: number = 10
    let n2: number = 3
    return(
        
        <div>
            <Header/>
            Opa {name}, Tudo bem?
            <Apex/>
            {n1 * n2}
        
            (<a href="https://www.youtube.com/">Clique aqui</a>)

            <F/>
        </div>
    )
}

export default App
