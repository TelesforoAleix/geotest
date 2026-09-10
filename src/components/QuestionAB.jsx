import React, { useState, useContext, useEffect } from "react";
import ScoreContext from "./context/ScoreContext";
import GameContext from "./context/GameContext";
import GameOverScreen from "./GameOVerScreen";
import PartyMessage from "./PartyMessage";

function QuestionAB() {
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
    if (selectedOption === question.answer) {
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

  const getDetailAnswer = (municipi) => {
    switch (gameTopic) {
      case 'population':
        return municipi.poblacio + ' habitants';
      case 'altitude':
        return municipi.altitud + ' m';
      case 'surface':
        return municipi.superficie + ' km²';
      default:
        return 'Not rendered';
    }
  }

  if (gameOver) {
    return <GameOverScreen onRestart={restart} />;
  }

  if (!question) {
    return <div className="message">Carregant...</div>;
  }


  return (
    <div className="question-test">
      <h2 className="question">{question.title}</h2>
      <PartyMessage />
      <div className="question-ab">


        <button
          onClick={() => checkAnswer(question.option1)}
          className="game-buttons-ab"
          disabled={answered}
          style={{
            backgroundColor:
              answered && question.option1 === question.answer
                ? "green"
                : answered && selectedOption === question.option1
                  ? "red"
                  : "initial",
          }}>
          {question.option1.municipi}
          <br />
          <span style={{ fontSize: 16 }}>
            {answered ? getDetailAnswer(question.option1) : question.option1.comarca}
          </span>
        </button>


        <button
          onClick={() => checkAnswer(question.option2)}
          className="game-buttons-ab"
          disabled={answered}
          style={{
            backgroundColor:
              answered && question.option2 === question.answer
                ? "green"
                : answered && selectedOption === question.option2
                  ? "red"
                  : "initial",
          }}
        >
          {question.option2.municipi}
          <br />
          <span style={{ fontSize: 16 }}>
            {answered ? getDetailAnswer(question.option2) : question.option2.comarca}
          </span>
        </button>
      </div>
    </div>
  );
}

export default QuestionAB;
