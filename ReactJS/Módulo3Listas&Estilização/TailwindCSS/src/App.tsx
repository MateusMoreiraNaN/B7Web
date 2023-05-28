import { useState } from 'react'
import './App.css'

const App = ()=>{
    return(
      <div className='bg-black text-orange-500 p-8 flex flex-col hover:text-6xl'><p className='hover:bg-teal-500'>Texto qualquer</p>
        <div className=" hover:bg-red-500 text-5xl  mt-8">
          <p className="text-sky-400/100">The quick brown fox...</p>
          <p className="text-sky-400/75">The quick brown fox...</p>
          <p className="text-sky-400/50">The quick brown fox...</p>
          <p className="text-sky-400/25">The quick brown fox...</p>
          <p className="text-sky-400/0">The quick brown fox...</p>
        </div>
      
      
      </div>

     
    )
}

export default App
