import React,{useEffect,useState} from 'react';

import './App.css';
import Questionaire from './components/Questionaire';



const Quiz_api="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";


function App() {
const [questions, setQuestions] = useState([])
const [currentIndex, setCurrentIndex] = useState(0)
const [score, setScore] = useState(0)

const [showAnswer, setShowAnswer] = useState(false)

useEffect(() => {
  fetch(Quiz_api)
  .then(res => res.json())
  .then(data => {
    const questions= data.results.map((question)=>({
      ...question,
      answers:[
        question.correct_answer,
        ...question.incorrect_answers,].sort(()=>Math.random()-0.5),
    }))
    setQuestions(questions);
 

  }) 

}, [])

const handleAnswer = (answer) => {

setShowAnswer(true)
 
 
  if(answer === questions[currentIndex].correct_answer){
    setScore(score+1);
  }



}
const handleNextQuestion = () =>{
  setCurrentIndex(currentIndex+1);
  setShowAnswer(false);
}


  return (
    <div className="container ">
     <>{questions.length > 0 ? (
       <>

       {
  currentIndex >= questions.length ? <div className="text-white text-2xl font-bold">
  Your score was {score} / 10  </div> :  <Questionaire data={questions[currentIndex]} handleAnswer={handleAnswer} showAnswer={showAnswer} handleNextQuestion={handleNextQuestion}/>
       }
       </>
           
      ) : (
        <h1 className="text-white text-2xl font-bold">loading...</h1>
      )
      }
     </>

    </div>
   
  );
}

export default App;
