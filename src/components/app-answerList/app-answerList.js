import React from 'react'

const AnswerList = ({answers}) =>{

  const elements = answers.map((item) => {
    const {name, id} = item;
    return (
      <li key={id} className="answer-group-item">
        {name}
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