import React, { useEffect } from "react";
import broma from "../data/missatges";

function GameOverScreen({ onRestart }) {
  const message = broma();

  useEffect(() => {
    const message = broma();
  }, []);

  return (
    <div className="message">
      <h1>GAME OVER</h1>
      <h3>{message}</h3>
      <button className="button" onClick={onRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default GameOverScreen;
