import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import infoButton from './components/images/info-button.png'
import dots from './components/images/dots.png'
import phone from './components/images/phone.png'
import Bonus from './components/Bonuses/Bonus'
import Now from './components/ActualTime/Time'
import Error from './components/Error/Erorr'

function App() {
  const error = useSelector((state) => state.error)

  return (
    <div className="App">
      {error && <Error message={error} />}
      <div className="topBar">
        <div className="orient">
          <div className="images">
            <img src={dots} alt="dots"></img>
          </div>
          <h1>Figma</h1>
        </div>
        <div>{Now}</div>
        <div className="orient">
          <div className="images">
            <img src={phone} alt="phone"></img>
          </div>
        </div>
      </div>
      <div className="info">
        <h2>ЛОГОТИП</h2>
        <button>
          <img className="infoImg" src={infoButton} alt="infoButton"></img>
        </button>
      </div>
      <Bonus />
      <div className="colorRectangle"></div>
    </div>
  )
}

export default App
