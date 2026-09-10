import React, { useState, useContext, useEffect } from "react";
import ScoreContext from "./context/ScoreContext";
import GameContext from "./context/GameContext";
import GameOverScreen from "./GameOVerScreen";
import PartyMessage from "./PartyMessage";


function QuestionTest() {
  const [question, setQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const { increaseScore, reduceLife, lifes, restartGame, clearPartyMessage } = useContext(ScoreContext);
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
     clearPartyMessage();
     setQuestion(getQuestion());
   }, 2000);

   return () => clearTimeout(timeout);
 }, [round, lifes, getQuestion, clearPartyMessage]);

 useEffect(() => {
   setQuestion(getQuestion());
 }, [getQuestion]);

 const restart = () => {
   setRound(0);
   setGameOver(false);
   restartGame();
   clearPartyMessage();
   setAnswered(false);
   setQuestion(getQuestion());
 };


 if (gameOver) {
   return <GameOverScreen onRestart={restart} />;
 }

 if (!question) {
   return <div className="message">Carregant...</div>;
 }


 return (
  <div className="question-test">
    <h2 className="question">{question.title}</h2>
    <h4 className="hint">{question.answer}</h4>
    <PartyMessage />
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
