import React, { createContext, useState } from "react";

const ScoreContext = createContext();

export function ScoreProvider({ children }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [lifes, setLife] = useState(3);

  const increaseScore = () => {
    setScore((prevScore) => {
      const newScore = prevScore + 1;

      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      return newScore;
    });
    setTotalScore((prevTotal) => prevTotal + 1);
  };

  const reduceLife = () => {
    setLife((prevLifes) => {
      if (prevLifes > 0) {
        return prevLifes - 1;
      } else {
        console.log("GAME OVER");
        setScore(0);
        return 3;
      }
    });
  };

  const restartGame = () => {
    setScore(0);
    setLife(3);
  };

  return (
    <ScoreContext.Provider
      value={{
        score,
        bestScore,
        totalScore,
        lifes,
        increaseScore,
        reduceLife,
        restartGame,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export default ScoreContext;
