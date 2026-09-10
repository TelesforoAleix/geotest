import React, { useContext } from "react";
import GameMenu from "./GameMenu";
import QuestionAB from "./QuestionAB";
import QuestionTest from "./QuestionTest";
import GameContext from "./context/GameContext";

function Main() {

    const { gameMode, getQuestion } = useContext(GameContext);

    const renderGameComponent = () => {
        switch (gameMode) {
        case 'questionAB':
            return <QuestionAB question={getQuestion()} />;
        case 'questionTest':
            return <QuestionTest question={getQuestion()} />;
        default:
            return <GameMenu />;
        }
      };

  return (
    <main>
      {renderGameComponent()}
    </main>
  );
}

export default Main;
