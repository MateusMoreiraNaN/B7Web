import {  } from 'react'
import './App.css'
import { useState } from 'react'

const App = ()=>{
  const [numero, setNumero] = useState(0)
  const [name, setName] = useState('Bonieky')

  const clickHand = ()=>{
    //alert("O botão foi clicado!")
    //numero += 10

    //setNumero()

  }

  const clickMudar = ()=>{
      setName('Mateus')
  }

    return(
      <div>
          <p>O numero é:{numero}</p>
          <button onClick={clickHand}>Clique aqui</button>

          <p>Meu nome é:{name}</p>
          <button onClick={clickMudar}>Mudar nome</button>
      </div>
    )
}

export default App
