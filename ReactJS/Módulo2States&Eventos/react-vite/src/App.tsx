import {  } from 'react'
import './App.css'
import { useState } from 'react'

const App = ()=>{
  const [numero, setNumero] = useState(0)
  const [name, setName] = useState('Bonieky')
  //const [menos, setMenos] = useState()

  const clickMais = ()=>{
    //alert("O botão foi clicado!")
    //numero += 10

    setNumero(numero +1)


  }

  const clickMenos = ()=>{
    if(numero == 0){
      numero == 0
    }else{
      setNumero(numero -1)
    }
  }

  const clickMudar = ()=>{
      setName('Mateus')
  }

  

    return(
      <div>
          <p>O numero é:{numero}</p>
          <button onClick={clickMais}>+</button>
          <button onClick={clickMenos}>-</button>

          <p>Meu nome é:{name}</p>
          <button onClick={clickMudar}>Mudar nome</button>
      </div>
    )
}

export default App
