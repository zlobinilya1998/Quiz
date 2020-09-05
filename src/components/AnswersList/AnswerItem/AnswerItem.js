import React from 'react'
import './AnswerItem.css'

export default function AnswerItem(props){
    return (
        <li onClick={()=>props.onAnswerClickHandler(props.id)} className='answerItem'>
            {props.answer.text}
        </li>
    )
}
