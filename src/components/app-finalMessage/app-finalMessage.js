import React from 'react'
import './app-finalMessage.css'

export default function FinalMessage({score, restartGame}) {
  
const message = (score === 30 ? 
  <div className="app-finalMessage-content">
    <img alt="bird-gif" src="https://media.giphy.com/media/B81XkL3dtnWTe/giphy.gif" width="480" height="207"  class="app-finalMessage-gif"></img>
    <h2 className="app-finalMessage-subtitle">Ура! Вы эксперт в птицах!</h2>
  </div>: 
  <div className="app-finalMessage-content">
    <img alt="bird-gif" src="https://media.giphy.com/media/xnvXXXbNxjxok/giphy.gif" width="480" height="207"  class="app-finalMessage-gif"></img>
    <h2 className="app-finalMessage-subtitle">Вы набрали {score} баллов из 30 возможных.</h2>
   </div>)
  return (
    <div className="app-finalMessage">
      <h1 className="app-finalMessage-title">Поздравляю!</h1>
      {message}
      <button className="app-finalMessage-btn" onClick={restartGame}>Попробовать ещё раз!</button>
    </div>
  )
}
