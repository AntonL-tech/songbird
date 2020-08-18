import React, {Component} from 'react'

import AppHeader from '../app-header'
import QuestionList from '../app-questions'
import RandomBird from '../app-randomBird'
import AnswerList from '../app-answerList'
import Description from '../app-description'
import birdsData from '../../service/birds'

import './app.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [
        {label: 'Разминка', active: false, id: 1},
        {label: 'Воробьиные', active: false, id: 2},
        {label: 'Лесные птицы', active: false, id: 3},
        {label: 'Певчие птицы', active: true, id: 4},
        {label: 'Хищные птицы', active: false, id: 5},
        {label: 'Морские птицы', active: false, id: 6}
      ],
      data: birdsData[0],
      isRightAnswer: true,
      isAnswerSelect: false,
      selectedBird: birdsData[0][0]
    }
    this.getRandomBird = this.getRandomBird.bind(this)
  }

  getRandomBird() {
    const randomIndex = Math.floor(Math.random() * 6);
    console.log(this.state.selectedBird)
    return this.state.data[randomIndex];
  }

  render() {
    const {questions, isRightAnswer, data, isAnswerSelect, selectedBird} = this.state;
    const randomBird = this.getRandomBird();
    return (
      <div className="app">
        <AppHeader/>
        <QuestionList questions={questions}/>
        <RandomBird randomBird={randomBird} isRightAnswer={isRightAnswer}/>
        <div>
          <AnswerList answers={data}/>
          <Description selectedBird={selectedBird} isAnswerSelect={isAnswerSelect}/>
        </div>
        <button className="next-btn">Next</button>
      </div>
    );
  }
}