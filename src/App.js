import React from "react";
import "./App.css";
import "./components/questions";
import { useState } from "react";
import questions from "./components/questions";
//const [stateValue, setStateFunction] = useState(initialStateValue);
// in map() method you can give parameters like
// map(value of curr.element, index of curr.element[optional])

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState(false);

  const play_again = () => {
    setQuestionIndex(0);
    setScore(0);
    setResults(false);
  }

  const present_Question = questions[questionIndex];
  const get_choice = (index) => {
    if (present_Question.answer === index) {
      alert("correct answer");
      setScore(score + 1);
    }
    // fixes the out of question error
    const next_question = questionIndex + 1;
    if (next_question < questions.length){
      setQuestionIndex(next_question)
    }
    else{
      setResults(true)
    }
  };
  return (
    <div className="quiz-box">
      {/* Ternary Operator below */}
      {results ? (<>
        <h1 id="result"> {score} / {questions.length}</h1> <br></br> <button id="play-again" onClick={play_again}>Play Again</button> </>
      ) : (
        <><div className="question">{present_Question.question}</div>
            
            <ul className="quiz-ul">
              {present_Question.options.map((option, i) => {
                return (
                  // here why are we give the onclick funtion as a anonymous one
                  // because if we give onclick = {get_choice()} it will start rendering instead of waiting for the click event
                  // if onclick = {get_choice} then it will be ok but we cant get the index as a argument for the funtion
                  <li className="quiz-li" onClick={() => get_choice(i)}>
                    {option}
                  </li>
                );
              })}
            </ul></>
      )}
      <footer>Created By Thulasikan with  &#128151; </footer>
    </div>
  );
  
}

export default App;
