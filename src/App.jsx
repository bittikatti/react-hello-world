import catRoll from './assets/catRoll.png'
import ninjaCat from './assets/ninjaCat.png'
import './App.css'

function App() {

  return (
    <>
      <div className="cat-container">
        <button className="spin">
          <img src={catRoll} className="cat" alt="Cat sleeping in a roll" title="God is sleeping. Do not touch."/>
        </button>
      </div>
      <h1>Meow World!</h1>
      <div className="cat-container">
        <button className="horizontal-movement">
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
