import React from 'react'
import './ActiveQuiz.css'
import AnswersList from '../AnswersList/AnswersList'

export default function ActiveQuiz(props) {
    return (
        <div className='ActiveQuiz'>
            <p className='question'>
                <span >   
                    <strong>{props.answerNumber}.</strong>&nbsp;
                    {props.question}
                </span>
                <small onClick={()=>props.onAnswerClickHandler()}>{props.answerNumber} из {props.quizLenght}</small>
            </p>

            <AnswersList
            {...props}
            />
        </div>
    )
}
