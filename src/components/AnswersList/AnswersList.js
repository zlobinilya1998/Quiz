import React from 'react'
// eslint-disable-next-line
import AnswersItem from './AnswerItem/AnswerItem'
import './AnswersList.css'

export default function AnswersList(props) {
    return (
        <ul className='answersList'>
            {props.answers.map((answer,index)=>{
                return(
                    <li onClick={()=>props.onAnswerClickHandler(index)} className='answerItem'>
                     {answer.text}
                    </li>
                // <AnswersItem
                // {...props}
                // key = {index}
                // answer = {answer}
                // index = {index}
                // />  
                )
            }) }
        </ul>
    )
}
