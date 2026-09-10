import React, { useContext } from "react";
import ScoreContext from "./context/ScoreContext";
import GameContext from "./context/GameContext";

function HeaderScores() {
  const { score, bestScore, totalScore, lifes, safePasses } = useContext(ScoreContext);
  const { partyMode } = useContext(GameContext);

  return (
    <div className="header-scores">
      <div className="header-scores-top">
        <span> Punts total: {totalScore} </span>
        <span> Record: {bestScore} </span>
      </div>
      <div className="header-scores-bottom">
        <span id="lifes" aria-label={partyMode ? "Glops disponibles" : "Vides"}>
          {partyMode ? "🍺 ".repeat(lifes) : "❤ ".repeat(lifes)}
          {partyMode && safePasses > 0 ? ` 🛡 ${safePasses}` : ""}
        </span>
        <span id="score"> Punts: {score} </span>
      </div>
    </div>
  );
}

export default HeaderScores;
