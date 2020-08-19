import React from 'react'

import './app-description.css'

const Description = ({selectedBird, isAnswerSelect}) =>{


  return (
    <div className="app-description">
      {!isAnswerSelect ? 
      <p>Послушайте плеер. <br/> Выберите птицу из списка</p> : 
      <div className="app-description-content">
        <img className="app-description-image" src={selectedBird.image} alt="selected-bird"/>
        <div>
          <h2 className="app-description-name">{selectedBird.name}</h2>
          <h3 className="app-description-species">{selectedBird.species}</h3>
          <audio controls>
            <source src={selectedBird.audio} type="audio/mpeg"/>
          </audio>
        </div>
      </div>}
      <p>{selectedBird.description}</p>
    </div>
  )
}

export default Description;