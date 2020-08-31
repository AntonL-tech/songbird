import React from 'react'

import './app-answerList.css'
const AnswerList = ({answers, selectBird}) =>{


  const elements = answers.map((item) => {
    const {name, id} = item;
    return (
      <li key={id} 
          className="answer-group-item"
          onClick={(event) => {
            selectBird(event)
            }}>
        <span className="answer-indicator"></span>{name}
      </li>
    )
  })

  return (
    <ul className="awnswer-list">
      {elements}
    </ul>
  )
}

export default AnswerList;