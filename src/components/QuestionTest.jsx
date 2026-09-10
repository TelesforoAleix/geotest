import React, { useState, useContext, useEffect } from "react";
import ScoreContext from "./context/ScoreContext";
import GameContext from "./context/GameContext";
import GameOverScreen from "./GameOVerScreen";


function QuestionTest() {
  const [question, setQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const { increaseScore, reduceLife, lifes, restartGame } = useContext(ScoreContext);
  const { getQuestion, gameTopic } = useContext(GameContext);
  const [round, setRound] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function checkAnswer(selectedOption) {
   setSelectedOption(selectedOption);
   setAnswered(true);
   if (selectedOption === question.correctOption) {
     increaseScore();
   } else {
     reduceLife();
   }
   setRound((prevRound) => prevRound + 1);
 }

 useEffect(() => {
   if (round === 0) {
     return undefined;
   }

   const timeout = setTimeout(() => {
     if (lifes === 0) {
       setGameOver(true);
       return;
     }

     setSelectedOption(null);
     setAnswered(false);
     setQuestion(getQuestion());
   }, 2000);

   return () => clearTimeout(timeout);
 }, [round, lifes, getQuestion]);

 useEffect(() => {
   setQuestion(getQuestion());
 }, [getQuestion]);

 const restart = () => {
   setRound(0);
   setGameOver(false);
   restartGame();
   setAnswered(false);
   setQuestion(getQuestion());
 };


 if (gameOver) {
   return <GameOverScreen onRestart={restart} />;
 }

 if (!question) {
   return <div className="message">Loading...</div>;
 }


 return (
  <div className="question-test">
    <h2 className="question">{question.title}</h2>
    <h4 className="hint">{question.answer}</h4>
    {["option1", "option2", "option3", "option4"].map((optionKey, index) => (
      <button
        key={index}
        onClick={() => checkAnswer(question[optionKey])}
        className="game-buttons"
        disabled={answered}
        style={{
          backgroundColor:
            answered && question[optionKey] === question.correctOption
              ? "green"
              : answered && selectedOption === question[optionKey]
                ? "red"
                : "initial",
        }}
      >
        {question[optionKey]}
      </button>
    ))}
  </div>
);
}

export default QuestionTest;
