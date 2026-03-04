import { useState } from 'react'
import catRoll from './assets/catRoll.png'
import ninjaCat from './assets/ninjaCat.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="cat-container">
        <img src={catRoll} className="cat spin" alt="Cat sleeping in a roll" />
      </div>
      <h1>Meow World!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div class="cat-container">
        <img src={ninjaCat} className="cat horizontal-movement" alt="Cat sleeping in a roll" />
      </div>
    </>
  )
}

export default App
