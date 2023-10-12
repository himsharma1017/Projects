import React from 'react'
import './ScoreView.css'

export default function ScoreView({handleResetBtn, score}) {
  return (
    <div>
      <p>You Scored {score} out of 5.</p>
      <button onClick={handleResetBtn}>Reset</button>
    </div>
    
  )
}
