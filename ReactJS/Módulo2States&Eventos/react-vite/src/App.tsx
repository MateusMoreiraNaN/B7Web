import {  } from 'react'
import './App.css'

const App = ()=>{

  const clickHand = ()=>{
    alert("O botão foi clicado!")
  }

    return(
      <div>
          <button onClick={clickHand}>Clique aqui</button>
      </div>
    )
}

export default App
