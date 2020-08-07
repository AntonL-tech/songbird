import React from 'react'

const QuestionList = ({questions}) => {

  const elements = questions.map((item) => {
    const {label, active, id} = item;
    return (
      <li key={id} className="list-group-item">
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