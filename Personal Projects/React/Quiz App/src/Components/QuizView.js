import React from 'react'
import './QuizView.css'

export default function QuizView({questions, currentQues, handleAnswerClick}) {

  return (
    <>
      <div className='question'>
        <div className='question-number'>
          <span> Question {currentQues+1} / {questions.length}</span>
        </div>

        <div className='question-text'>
          {questions[currentQues].question} 
        </div>
      </div>

      <div className='answer'>
        {questions[currentQues].answers.map(({text, isCorrect})=>{
          return <button onClick={()=>handleAnswerClick(isCorrect)} key={text}>{text}</button>
        })}
      </div>
    </>
  )
}
