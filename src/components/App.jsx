import React, { useContext } from "react";
import { ScoreProvider } from "./context/ScoreContext";
import { GameProvider } from "./context/GameContext";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {

  return (
    <ScoreProvider>
      <GameProvider>
        <div className="app">
          <Header />
          <Main />
          <Footer />
        </div>
      </GameProvider>
    </ScoreProvider>
  );
}

export default App;
