import React, { useContext } from "react";
import ScoreContext from "./context/ScoreContext";

function HeaderScores() {
  const { score, bestScore, totalScore } = useContext(ScoreContext);
  const { lifes, reduceLife, restartLife } = useContext(ScoreContext);

  return (
    <div className="header-scores">
      <div className="header-scores-top">
        <span> Punts total: {totalScore} </span>
        <span> Record: {bestScore} </span>
      </div>
      <div className="header-scores-bottom">
        <span id="lifes"> {"❤ ".repeat(lifes) + "  "}</span>
        <span id="score"> Punts: {score} </span>
      </div>
    </div>
  );
}

export default HeaderScores;
