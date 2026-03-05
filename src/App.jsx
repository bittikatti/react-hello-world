import { useState } from 'react'
import catRoll from './assets/catRoll.png'
import ninjaCat from './assets/ninjaCat.png'
import './App.css'

function App() {

  return (
    <>
      <div class="cat-container">
        <img src={catRoll} className="cat spin" alt="Cat sleeping in a roll" title="God is sleeping. Do not touch."/>
      </div>
      <h1>Meow World!</h1>
      <div class="cat-container" title="Cat is angry. Do not touch.">
        <img src={ninjaCat} className="cat horizontal-movement" alt="Cat in ninja position and claws out moving back and forth with one leg pointing forward like doing a ninja kick."/>
      </div>
    </>
  )
}

export default App
