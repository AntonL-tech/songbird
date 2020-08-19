import React from 'react'

import './app-randomBird.css'

const RandomBird = ({randomBird, isRightAnswer}) => {
  const defaultBirdUrl = "https://www.publicdomainpictures.net/pictures/60000/nahled/bird-silhouette-blackbird.jpg"
  return (
    <div className="random-bird">
      <img className="random-bird-image" src={isRightAnswer ? randomBird.image : defaultBirdUrl} alt="random-bird"/>
      <div className="random-bird-content">
        <h2 className="random-bird-title">{isRightAnswer ? randomBird.name : '******'}</h2>
        <audio controls>
          <source src={randomBird.audio} type="audio/mpeg"/>
        </audio>
      </div>
    </div>
  )
}

export default RandomBird;