import { useState } from 'react'
import catRoll from './assets/catRoll.png'
import ninjaCat from './assets/ninjaCat.png'
import './App.css'

function FishImage({fishColor}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="55" viewBox="0 0 76 42">
      <path
        id="Selection"
        fill={fishColor}
        stroke={fishColor}
        strokeWidth="1"
        d="M 76.00,34.00 C 70.01,32.01 67.27,28.31 64.58,28.46 62.54,28.57 55.02,34.10 52.00,35.48 38.26,41.78 31.21,43.65 17.00,37.14 12.26,34.96 -1.20,25.08 0.66,19.17 1.43,16.69 5.92,13.41 8.00,11.82 14.98,6.45 24.83,-0.40 34.00,0.32 44.50,1.16 47.48,4.81 56.00,9.78 58.45,11.21 63.39,15.16 66.00,15.14 68.25,15.11 73.16,11.28 76.00,10.00 76.00,10.00 74.02,22.42 74.02,22.42 74.02,22.42 76.00,34.00 76.00,34.00 Z"
        />
    </svg>
  )
}

function App() {
  const [disturbanceLevel, setCount] = useState(0)

  {/* Disable fish button if disturbance level is zero */}
  {/* If fish button is disabled, change the fish color to gray */}
  const fishIsDisabled = disturbanceLevel <= 0
  const dynamicFishColor = fishIsDisabled ? "gray" : "rgb(5,5,73)"
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
            <button
              className='fish-button'
              onClick={() => setCount((disturbanceLevel) => disturbanceLevel - 1)}
              disabled={fishIsDisabled}>
                <FishImage fishColor={dynamicFishColor}/>
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


      <div className="cat-container">
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
