import './App.css';
import ScoreView from './Components/ScoreView';
import QuizView from './Components/QuizView';
import { useState } from 'react';

function App() {

  const questions = [
    {
      question: "Total number of oceans in the World is ?",
      answers: [{ text: "7" }, { text: "6" }, { text: "5", isCorrect: true },{text:"4"}],
    },
    {
      question: "Who is the CEO of Tesla ?",
      answers: [
        { text: "Jeff Bezos" },
        { text: "Elon Musk", isCorrect: true },
        { text: "Bill Gates" },
        { text: "Tony Stark" },
      ],
    },
    {
      question: "Where is Statue of Liberty is located?",
      answers: [
        { text: "India" },
        { text: "Russia" },
        { text: "UK" },
        { text: "USA", isCorrect: true },
      ],
    },
    {
      question: "What is the capital of Germany?",
      answers: [
        { text: "Paris" },
        { text: "Berlin", isCorrect: true },
        { text: "London" },
        { text: "Dublin" },
      ],
    },
    {
      question: "Which one is the largest tropical rain forest in the world?",
      answers: [
        { text: "Amazon", isCorrect: true },
        { text: "Bosawas" },
        { text: "Southeast Asian Rain Forest" },
        { text: "Daintree Rain Forest" },
      ],
    },
  ];

  const [currentQues, setcurrentQues] = useState(0)
  const [isQuizOver, setIsQuizOver] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerClick = (isCorrect) =>{
    // Checking Score
    if(isCorrect){
      setScore(score+1)
    }

    const nextQues = currentQues+1;

    if(nextQues < questions.length){
      setcurrentQues(nextQues)
    }
    else{
      setIsQuizOver(true)
    }
  }

  const handleResetBtn = () =>{
    setcurrentQues(0)
    setIsQuizOver(false)
    setScore(0)
  }

  return (
    <div className="App">
      <h2>Let's Attempt a Quiz !</h2>
      {isQuizOver ? <ScoreView handleResetBtn={handleResetBtn} score={score}/> :  <QuizView questions={questions} currentQues={currentQues}
      handleAnswerClick={handleAnswerClick}/>}
    </div>
  );
}

export default App;
