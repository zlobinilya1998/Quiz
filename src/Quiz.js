import React, { useState } from 'react';
import './Quiz.css';
import ActiveQuiz from './components/ActiveQuiz/ActiveQuiz'

function Quiz() {
  let quiz = [
    { 
      id:1,
      rightAnswerId: 2,
      question:'Какого цвета небо?',
      answers:
        [
          {text:'Черный',id:1},
          {text:'Синий',id:2},
          {text:'Красный',id:3},
          {text:'Зеленый',id:4},
        ]
    },
    { 
      id:2,
      rightAnswerId: 3,
      question:'В каком году основали Санкт-Петербург?',
      answers:
        [
          {text:'1700',id:1},
          {text:'1702',id:2},
          {text:'1703',id:3},
          {text:'1803',id:4},
        ]
    }
  ]

  let [activeQuestion,setActiveQuestion] = useState(0)

  function showMessage(index) {
    console.log('Всем привет!',index)
  }
  return (
    <div className="quiz">
      <div className='quizWrapper'>
        <h1>Ответьте на все вопросы</h1>
        <ActiveQuiz
        question = {quiz[0].question}
        answers = {quiz[0].answers}
        onAnswerClickHandler = {()=>showMessage.bind(this)}
        quizLenght = {quiz.length}
        answerNumber = {activeQuestion+1}
        />
      </div>
    </div>
  );
}

export default Quiz;
