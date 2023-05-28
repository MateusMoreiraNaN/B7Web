import { useState } from 'react'
import poweredImage from './assets/imc/powered.png'

import styles from './App.module.css'

const App = ()=>{
  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
            <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
    </div>
  )
}

export default App
