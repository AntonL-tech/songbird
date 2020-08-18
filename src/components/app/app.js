import React, {Component} from 'react'

import AppHeader from '../app-header'
import QuestionList from '../app-questions'
import RandomBird from '../app-randomBird'
import AnswerList from '../app-answerList'
import Description from '../app-description'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [
        {label: 'Разминка', active: true, id: 1},
        {label: 'Воробьиные', active: false, id: 2},
        {label: 'Лесные птицы', active: false, id: 3},
        {label: 'Певчие птицы', active: false, id: 4},
        {label: 'Хищные птицы', active: false, id: 5},
        {label: 'Морские птицы', active: false, id: 6}
      ]
    }
  }

  render() {
    const {questions} = this.state;
    return (
      <div>
        <AppHeader/>
        <QuestionList questions={questions}/>
        <RandomBird/>
        <div>
          <AnswerList/>
          <Description/>
        </div>
      </div>
    );
  }
}