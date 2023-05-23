import React from "react"
import { Apex } from './components/Apex'
import { Header } from "./components/Header"
import { Photo } from "./components/Photo"

/*
const Header = () =>{
    return (
        <header>
            <h1>Titulo da página</h1>
            <br />
        </header>
    )
}
*/

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
            <Header  title="Este é um exemplo"/>
            Opa {name}, Tudo bem?
            <Apex/>
            {n1 * n2}
        
            (<a href="https://www.youtube.com/">Clique aqui</a>)

            
            <Photo legend="Google">
                <img src="https://www.google.com.br/logos/google.jpg" alt="" />
            </Photo>
            

            <F/>
        </div>
    )
}

export default App
