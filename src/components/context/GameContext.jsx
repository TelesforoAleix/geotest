import React, { createContext, useState } from "react";
import { populationQuestion, altitudeQuestion, surfaceQuestion } from "../../logic/municipis";
import { capitalComarca, comarcaCapital, comarcaProvincia } from "../../logic/comarques"

const GameContext = createContext();

export function GameProvider({ children }) {
  const [gameMode, setGameMode] = useState(null);
  const [gameTopic, setGameTopic] = useState(null);

  const getQuestionAB = () => {
    switch (gameTopic) {
      case 'population':
        return populationQuestion();
      case 'altitude':
        return altitudeQuestion();
      case 'surface':
        return surfaceQuestion();
      default:
        return null;
    }
  };

  const getQuestionTest = () => {
    switch (gameTopic) {
      case 'capital':
        return capitalComarca();
      case 'comarca':
        return comarcaCapital();
      case 'provincia':
        return comarcaProvincia();
      default:
        return null;
    }
  }

  const getQuestion = () => {
    switch (gameMode) {
      case 'questionAB':
        return getQuestionAB();
      case 'questionTest':
        return getQuestionTest();
      default:
        return null;
    }
  }

  return (
    <GameContext.Provider value={{ gameMode, gameTopic, setGameMode, getQuestion, setGameTopic }}>
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
