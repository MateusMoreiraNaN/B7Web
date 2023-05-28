import { useState } from 'react'
import poweredImage from './assets/imc/powered.png'

import styles from './App.module.css'

const App = ()=>{
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
            <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>IMC é a sigla para Indice de Massa Corpóreea. parâmetro adotado pela Organização mundial de Saúde para calcular o peso Ideal de cada pessoa.
          </p>

          <input 
            type="number"
            placeholder='Digite a sua altura. Ex 1.5 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            
          />

<input 
            type="number"
            placeholder='Digite o seu peso 75.3 (em kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            
          />

          <button>Calcular</button>
        </div>

        <div className={styles.rightSide}>
          ...
        </div>

      </div>
    </div>
  )
}

export default App
