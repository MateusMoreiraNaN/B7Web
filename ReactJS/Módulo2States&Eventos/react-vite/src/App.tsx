import { ChangeEvent } from 'react'
import './App.css'
import React,  { useState } from 'react'

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
    }else if(numero > 20){
      setNumero(numero -10)
    }else{
      setNumero(numero -1)
    }
  }

  const clickMudar = ()=>{
      setName('Mateus')
  }

  const [seunome, setSeunome] = useState('')

  const inputHand = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setSeunome(e.target.value)
  }

  //EXERCÍCIO
  const [nome1, setNome1] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [idade, setIdade] = useState('')

  const nomeUm = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setNome1(e.target.value)
  }

  const sobrenomeTar = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setSobrenome(e.target.value)
  }

  const age = (e:ChangeEvent<HTMLInputElement>)=>{
    setIdade(e.target.value)
  }
  

  return(
      <div>
          <p>O numero é:{numero}</p>
          <button onClick={clickMais}>+</button>
          <button onClick={clickMenos}>-</button>

          <p>Meu nome é:{name}</p>
          <button onClick={clickMudar}>Mudar nome</button>

          <div>
            <p>Nome:</p>
            <input type="text" placeholder='Digite seu nome' value={seunome} onChange={inputHand}/>
            <hr />
            <p>Seu nome é:{seunome}</p>
            <hr />
          </div>

          <div className="ex">
            Nome:<input type="text" value={nome1} onChange={nomeUm}/>
            Sobrenome:<input type="text" value={sobrenome} onChange={sobrenomeTar}/>
            Idade:<input type="text" value={idade} onChange={age}/>
            <hr />
            <p>Ola {nome1} {sobrenome}, tudo bem?</p>
            <p>Você tem {idade} anos.</p>
          </div>
      </div>
    )
}

export default App
