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
        {label: 'Разминка', active: true, id: 0},
        {label: 'Воробьиные', active: false, id: 1},
        {label: 'Лесные птицы', active: false, id: 2},
        {label: 'Певчие птицы', active: false, id: 3},
        {label: 'Хищные птицы', active: false, id: 4},
        {label: 'Морские птицы', active: false, id: 5}
      ],
      current: 0,
      data: birdsData[0],
      isRightAnswer: false,
      isAnswerSelect: false,
      selectedBird: birdsData[0][0],
      randomIndex: null
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

      const randomIndex = Math.floor(Math.random() * 6);
      this.setState({
        randomIndex: randomIndex, 
        current: this.state.current + 1
      })  

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

  nextBird = () => {
    this.setState({
      data: birdsData[this.state.current],
      randomBird: birdsData[this.state.current][this.state.randomIndex],
      isRightAnswer: false,
      isAnswerSelect: false,
    })  

    document.querySelectorAll('.answer-indicator').forEach((item) => item.classList.remove('red'))
    document.querySelectorAll('.answer-indicator').forEach((item) => item.classList.remove('green'))

    this.state.questions.map(item => {
      if (item.id !== this.state.current) {
        item.active = false;
      } else {
        item.active = true;
      }
    })

  }


  render() {
    const {questions, isRightAnswer, data, isAnswerSelect, selectedBird, randomBird} = this.state;
    return (
      <div className="app">
        <AppHeader/>
        <QuestionList questions={questions}/>
        {this.state.current === 6 ? 
        <h1>Hello World</h1> :
        <div className="app-inner"> 
        <RandomBird randomBird={randomBird} isRightAnswer={isRightAnswer}/>
        <div className="app-content">
          <AnswerList answers={data} selectBird={this.selectBird} isRightAnswer={isRightAnswer}/>
          <Description selectedBird={selectedBird} isAnswerSelect={isAnswerSelect}/>
        </div>
        <button className={isRightAnswer ? 'next-btn-active' : 'next-btn'}
                onClick={isRightAnswer ? this.nextBird : null}>Next level</button>
        </div>}
      </div>
    );
  }
}