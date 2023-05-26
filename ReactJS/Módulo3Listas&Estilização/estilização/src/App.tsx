import { useState } from 'react'
import './App.css'
import { Botao } from './components/Botao'

const App = () =>{
  const [clicked, setClick] = useState(false)
  const [padding, setPadding] = useState(50)

  const handleClick = ()=>{
    if(clicked == false){
      setClick(true)
    }else{
      setClick(false)
    }

    if(padding == 50){
      setPadding(100)
    }else{
      setPadding(50)
    }
  }

  

  return(
    <div>
      <button className='botao3' onClick={handleClick}style={{backgroundColor: clicked ? '#273746' : '#E67E22 ', padding: padding }}>Clique aqui</button>

      <Botao />

      
    </div>
  )
}

export default App
