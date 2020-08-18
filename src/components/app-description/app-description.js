import React from 'react'

const Description = ({selectedBird, isAnswerSelect}) =>{


  return (
    <div className="description">
      {!isAnswerSelect ? 
      <p>Послушайте плеер. <br/> Выберите птицу из списка</p> : 
      <div>
        <img src={selectedBird.image} alt="selected-bird"/>
        <div>
          <h2>{selectedBird.name}</h2>
          <h3>{selectedBird.species}</h3>
          <audio controls>
            <source src={selectedBird.audio} type="audio/mpeg"/>
          </audio>
        </div>
        <p>{selectedBird.description}</p>
      </div>}
    </div>
  )
}

export default Description;