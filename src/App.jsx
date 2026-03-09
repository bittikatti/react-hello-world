import { useState } from 'react'
import catRoll from './assets/catRoll.png'
import ninjaCat from './assets/ninjaCat.png'
import fish from './assets/fish.svg'
import './App.css'

function App() {
  const [disturbanceLevel, setCount] = useState(0)
  return (
    <>
      <h1>Meow World!</h1>
      <div className='instructions'>
        <p>
          Avoid disturbing the cats by touching them too much.
        </p>
      </div>
      <div className='cat-status-toolbar'>
          {/* Cat disturbance status indicator */}
          {/* TODO: left side */}
          <div>
            <p>Cat disturbance level: {disturbanceLevel} Maximum is 3.</p>
          </div>

          {/* TODO: right side */}
          <div>
            <p>Reduce with fish</p>
            <button className='fish-button' onClick={() => setCount((disturbanceLevel) => disturbanceLevel - 1)}>
              <img src={fish} alt="Fish" style={{height: "25px"}}/>
            </button>
          </div>
        </div>
      <div className='weather-container'>
        {/* Container for sky effects */}
        {/* TODO Find an effective way to convey effects inside to screen reader. */}
        <div className='sun sun-glow'></div>
        <div className='cloud-container horizontal-left-to-right-movement'>
          {/* https://icons.getbootstrap.com/icons/cloud-fill/ */}
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className="bi bi-cloud-fill" viewBox="0 0 16 16">
            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>
          </svg>
        </div>
      </div>


      <div className="cat-container center-items">
        <button className="cat-button spin" onClick={() => setCount((disturbanceLevel) => disturbanceLevel + 1)}>
          <img src={catRoll} className="cat" alt="Cat sleeping in a roll" title="God is sleeping. Do not touch."/>
        </button>
      </div>
      <div className="cat-container">
        <button className="cat-button horizontal-movement" onClick={() => setCount((disturbanceLevel) => disturbanceLevel + 1)}>
          <img 
            src={ninjaCat}
            className="cat"
            alt="Cat in ninja position and claws out moving back and forth with one leg pointing forward like doing a ninja kick."
            title="Cat is angry. Do not touch."
            />
        </button>
      </div>
    </>
  )
}

export default App
