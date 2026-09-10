import React, { useContext, useEffect } from "react";
import broma from "../data/missatges";
import GameContext from "./context/GameContext";
import ScoreContext from "./context/ScoreContext";

function GameOverScreen({ onRestart }) {
  const { partyMode } = useContext(GameContext);
  const { score } = useContext(ScoreContext);
  const message = broma();

  const partyOutcome = () => {
    if (score >= 15) {
      return "Partida excel·lent: no beus. Tria algú del grup perquè begui un glop.";
    }

    if (score >= 10) {
      return "Bona partida: beu un glop.";
    }

    if (score >= 5) {
      return "Partida discreta: beu dos glops.";
    }

    return "Partida complicada: beu tres glops.";
  };

  useEffect(() => {
    const message = broma();
  }, []);

  return (
    <div className="message">
      <h1>Fi de partida</h1>
      <h3>{message}</h3>
      {partyMode && <p className="party-game-over">{partyOutcome()}</p>}
      <button className="button" onClick={onRestart}>
        Torna a jugar
      </button>
    </div>
  );
}

export default GameOverScreen;
