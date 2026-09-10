import React, { useContext, useEffect, useState } from "react";
import CataloniaMap from "./CataloniaMap";
import ScoreContext from "./context/ScoreContext";
import GameContext from "./context/GameContext";
import GameOverScreen from "./GameOVerScreen";
import PartyMessage from "./PartyMessage";

function QuestionMap() {
  const [question, setQuestion] = useState(null);
  const [selectedComarca, setSelectedComarca] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [round, setRound] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const { increaseScore, reduceLife, lifes, restartGame, clearPartyMessage } = useContext(ScoreContext);
  const { getQuestion } = useContext(GameContext);

  const checkAnswer = (comarca) => {
    setSelectedComarca(comarca);
    setAnswered(true);

    if (comarca === question.correctComarca) {
      increaseScore();
    } else {
      reduceLife();
    }

    setRound((previousRound) => previousRound + 1);
  };

  useEffect(() => {
    setQuestion(getQuestion());
  }, [getQuestion]);

  useEffect(() => {
    if (round === 0) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      if (lifes === 0) {
        setGameOver(true);
        return;
      }

      setSelectedComarca(null);
      setAnswered(false);
      clearPartyMessage();
      setQuestion(getQuestion());
    }, 2000);

    return () => clearTimeout(timeout);
  }, [clearPartyMessage, getQuestion, lifes, round]);

  const restart = () => {
    setRound(0);
    setGameOver(false);
    restartGame();
    clearPartyMessage();
    setSelectedComarca(null);
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
    <div className="question-map">
      <h2 className="question">{question.title}</h2>
      <h4 className="hint">{question.prompt}</h4>
      <PartyMessage />
      <div className="map">
        <CataloniaMap
          onSelect={checkAnswer}
          selectedComarca={selectedComarca}
          correctComarca={answered ? question.correctComarca : null}
          disabled={answered}
        />
      </div>
    </div>
  );
}

export default QuestionMap;
