import React, { useContext } from "react";
import GameContext from "./context/GameContext";
import ScoreContext from "./context/ScoreContext";

function HeaderButtons({ menuButton, questionTest, questionAB }) {

  const { setGameMode } = useContext(GameContext);
  const { restartGame } = useContext(ScoreContext)

  const goMenu = () => {
    setGameMode(null);
    restartGame();
  }

  return (
    <div className="header-buttons">
      <button className="header-button" onClick={goMenu}>
        Menú
      </button>
    </div>
  );
}

export default HeaderButtons;
