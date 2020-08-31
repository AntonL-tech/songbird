import React from 'react'

import './app-questions.css'

const QuestionList = ({questions}) => {

  const elements = questions.map((item) => {
    const {label, active, id} = item;
    return (
      <li key={id} className={active ? "list-group-item-active" : "list-group-item"}>
        {label}
      </li>
    )
  })

  return (
    <ul className="question-list">
      {elements}
    </ul>
  )
}

export default QuestionList;