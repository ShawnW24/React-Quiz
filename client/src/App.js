import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import{Questionaire} from './components';
import {Router, Link} from "@reach/router";


const API_URL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple';


function App() {
  const[questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then((data) =>{
      const questions = data.results.map((question) => 
      ({
        ...question,
        answers: [
          question.correct_answer,
          ...question.incorrect_answers,
        ].sort(() => Math.random()- 0.5)
      }))

      setQuestions(questions);
    });
  }, []);


  const handleAnswer = (answer) => {
    if(!showAnswers){
    if(answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
  }

    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex +1);
  }

  return questions.length > 0 ? (
    <div className="App"> 
      <h1 class='text-secondary text-10xl mx-auto'>.::Welcome To My Quiz App::.</h1>
      {currentIndex >= questions.length ? (
        <h1 className='bg-info col-4 rounded shadow mx-auto text-center font-bold'> Your Score Is: {score}/10!! </h1>
      ) : (
        <Questionaire 
          data={questions[currentIndex]} 
          showAnswers={showAnswers}
          handleAnswer={handleAnswer}
          handleNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  ) : ( 
    <h2>Loading....</h2>
  );

}


export default App;
