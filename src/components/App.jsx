import React, { useContext } from "react";
import { ScoreProvider } from "./context/ScoreContext";
import GameContext, { GameProvider } from "./context/GameContext";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function AppContent() {
  const { partyMode } = useContext(GameContext);

  return (
    <div className={partyMode ? "app party-mode" : "app"}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <ScoreProvider>
        <AppContent />
      </ScoreProvider>
    </GameProvider>
  );
}

export default App;
