import React, { createContext, useState } from "react";
import { populationQuestion, altitudeQuestion, surfaceQuestion } from "../../logic/municipis";
import { capitalComarca, comarcaCapital, comarcaProvincia } from "../../logic/comarques"
import { locateComarcaQuestion, municipiComarcaQuestion } from "../../logic/map";

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

  const getQuestionMap = () => {
    switch (gameTopic) {
      case 'municipiComarca':
        return municipiComarcaQuestion();
      case 'locateComarca':
        return locateComarcaQuestion();
      default:
        return null;
    }
  };

  const getQuestion = () => {
    switch (gameMode) {
      case 'questionAB':
        return getQuestionAB();
      case 'questionTest':
        return getQuestionTest();
      case 'questionMap':
        return getQuestionMap();
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
