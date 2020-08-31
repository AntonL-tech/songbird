import React, { Component } from 'react'
import Controls from '../app-audio/Controls'
import Player from '../app-audio/Player'
import './app-description.css'

export default class Description extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    const {selectedBird, isAnswerSelect} = this.props
    return (
      <div className="app-description">
        {!isAnswerSelect ? 
        <p>Послушайте плеер. <br/> Выберите птицу из списка</p> : 
        <div>
          <div className="app-description-content">
            <img className="app-description-image" src={selectedBird.image} alt="selected-bird"/>
            <div style={{width: '100%'}}>
              <h2 className="app-description-name">{selectedBird.name}</h2>
              <h3 className="app-description-species">{selectedBird.species}</h3>
              <Player audioSrc={selectedBird.audio}/>
            </div>
          </div>
          <p>{selectedBird.description}</p>
        </div>}
      </div>
    )
  } 
}

