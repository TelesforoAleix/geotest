import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import GameContext from "./GameContext";

const ScoreContext = createContext();

export function ScoreProvider({ children }) {
  const { partyMode } = useContext(GameContext);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [lifes, setLife] = useState(3);
  const [safePasses, setSafePasses] = useState(0);
  const [partyMessage, setPartyMessage] = useState("");
  const clearPartyMessage = useCallback(() => setPartyMessage(""), []);

  useEffect(() => {
    if (!partyMode) {
      setSafePasses(0);
      setPartyMessage("");
    }
  }, [partyMode]);

  const increaseScore = () => {
    setScore((prevScore) => {
      const newScore = prevScore + 1;

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      if (partyMode) {
        if (newScore % 10 === 0) {
          setSafePasses((passes) => passes + 1);
          setPartyMessage("10 punts! Tens un salconduit: el pròxim glop no compta.");
        } else if (newScore % 5 === 0) {
          setPartyMessage("5 punts! Tria algú del grup perquè begui un glop.");
        } else {
          setPartyMessage("");
        }
      }

      return newScore;
    });
    setTotalScore((prevTotal) => prevTotal + 1);
  };

  const reduceLife = () => {
    if (partyMode && safePasses > 0) {
      setSafePasses((passes) => passes - 1);
      setPartyMessage("Salconduit utilitzat: aquest cop no beus.");
      return;
    }

    if (partyMode) {
      setPartyMessage("Resposta incorrecta: beu un glop.");
    }

    setLife((prevLifes) => {
      if (prevLifes > 0) {
        return prevLifes - 1;
      } else {
        setScore(0);
        return 3;
      }
    });
  };

  const restartGame = () => {
    setScore(0);
    setLife(3);
    setSafePasses(0);
    setPartyMessage("");
  };

  return (
    <ScoreContext.Provider
      value={{
        score,
        bestScore,
        totalScore,
        lifes,
        safePasses,
        partyMessage,
        clearPartyMessage,
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
