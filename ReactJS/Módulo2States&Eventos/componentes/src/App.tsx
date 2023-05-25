import { useState } from 'react'
import { Botao } from './components/Botao'
import { Pessoa } from './components/Pessoa'

import './App.css'

const App = ()=>{

  let textoDoBotao = 'clicar no botão'

  const botaoEvent = (txt: string)=>{
    alert("Frase do App: "+txt)
  }

  let list = [
    {name: 'Bonieky', age: '90'},
    {name: 'João', age: '21'},
    {name: 'Mateus', age: '38'},
    {name: 'Pedro', age: '90'},,
    {name: 'Paulo', age: '90'},
  ]

  const [show, setShow] = useState(false)

  const move = ()=>{
    /*
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
    */
   setShow( !show )
  }

    return(
      <div>

        <button onClick={move}>{
          show ? 'Ocultar' : 'Mostrar'
        }</button>

        {show == true &&
          <div>
              Bla bla bla....
          </div>
        }

        <Botao text={textoDoBotao} clickFn={botaoEvent}/>

        <h2>Lista de presença</h2>
        <ul>
         {list.map((i, index)=>(
          <li key={index}>{i?.name} - {i?.age} anos</li>
          //<Pessoa key={index} data={i} />
         ))}
        </ul>
      </div>
    )
}

export default App
