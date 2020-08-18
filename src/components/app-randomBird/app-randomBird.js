import React from 'react'

const RandomBird = ({randomBird, isRightAnswer}) => {
  const defaultBirdUrl = 'https://www.publicdomainpictures.net/pictures/60000/nahled/bird-silhouette-blackbird.jpg'
  return (
    <div>
      <img src={isRightAnswer ? randomBird.image : defaultBirdUrl} alt='random-bird'/>
      <div>
        <h2>{isRightAnswer ? randomBird.name : '******'}</h2>
        <audio controls>
          <source src={randomBird.audio} type="audio/mpeg"/>
        </audio>
      </div>
    </div>
  )
}

export default RandomBird;