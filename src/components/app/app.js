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
        {label: 'Разминка', active: true, id: 1},
        {label: 'Воробьиные', active: false, id: 2},
        {label: 'Лесные птицы', active: false, id: 3},
        {label: 'Певчие птицы', active: false, id: 4},
        {label: 'Хищные птицы', active: false, id: 5},
        {label: 'Морские птицы', active: false, id: 6}
      ],
      data: birdsData[0],
      isRightAnswer: false,
      isAnswerSelect: false,
      selectedBird: birdsData[0][0],
    }
    this.selectBird = this.selectBird.bind(this)
  }

  componentWillMount() {
    const randomIndex = Math.floor(Math.random() * 6);
    this.setState({randomBird: this.state.data[randomIndex]})
  }


  selectBird(event) {
    const bird = this.state.data.filter(item => event.target.textContent === item.name)

    this.setState({
      selectedBird: bird[0],
      isAnswerSelect: true
    })

    if (event.target.textContent === this.state.randomBird.name && !this.state.isRightAnswer) {
      event.target.querySelector('span').classList.add('green')
      this.play(process.env.PUBLIC_URL + '/sounds/win.mp3')
      this.setState({isRightAnswer: true})
    } else if (!this.state.isRightAnswer) {
      event.target.querySelector('span').classList.add('red')
      this.play(process.env.PUBLIC_URL + '/sounds/no.mp3')
    }
  }

  play = (path) => {
    var audio = new Audio(path);
    audio.volume = .3;
    audio.play();
  }


  render() {
    const {questions, isRightAnswer, data, isAnswerSelect, selectedBird, randomBird} = this.state;
    return (
      <div className="app">
        <AppHeader/>
        <QuestionList questions={questions}/>
        <RandomBird randomBird={randomBird} isRightAnswer={isRightAnswer}/>
        <div className="app-content">
          <AnswerList answers={data} selectBird={this.selectBird} isRightAnswer={isRightAnswer}/>
          <Description selectedBird={selectedBird} isAnswerSelect={isAnswerSelect}/>
        </div>
        <button className={isRightAnswer ? 'next-btn-active' : 'next-btn'}>Next level</button>
      </div>
    );
  }
}