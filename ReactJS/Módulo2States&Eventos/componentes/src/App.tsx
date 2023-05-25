import { useState } from 'react'
import { Botao } from './components/Botao'

import './App.css'

const App = ()=>{

  let textoDoBotao = 'clicar no botão'

  const botaoEvent = (txt: string)=>{
    alert("Frase do App: "+txt)
  }

    return(
      <div>
        <Botao text={textoDoBotao} clickFn={botaoEvent}/>
      </div>
    )
}

export default App
