import React, { useContext, useState } from "react";
import GameContext from "./context/GameContext";

function GameMenu() {
  const { partyMode, setGameMode, setGameTopic, setPartyMode } = useContext(GameContext);
  const [showPartyNotice, setShowPartyNotice] = useState(false);

  const onSetGameModeAndStart = (mode, topic) => {
    setGameMode(mode);
    setGameTopic(topic);
  };

  const enablePartyMode = () => {
    setPartyMode(true);
    setShowPartyNotice(false);
  };

  if (showPartyNotice) {
    return (
      <div className="party-notice">
        <h2>Mode festa</h2>
        <p>Només per a majors de 18 anys. Beu amb responsabilitat, no condueixis i atura't si no et trobes bé.</p>
        <p>Pots substituir els glops per begudes sense alcohol, aigua o qualsevol altra alternativa.</p>
        <h3>Regles</h3>
        <ul>
          <li>Resposta incorrecta: beu un glop.</li>
          <li>5, 15, 25... punts: tria algú perquè begui un glop.</li>
          <li>10, 20, 30... punts: guanyes un salconduit.</li>
          <li>En perdre: el resultat final depèn dels punts que hagis fet.</li>
        </ul>
        <button className="button" onClick={enablePartyMode}>Tinc 18 anys o més</button>
        <button className="button" onClick={() => setShowPartyNotice(false)}>Torna al menú</button>
      </div>
    );
  }

    return (
    <div className="game-menu">
      <div className="party-switch" aria-label="Selector de mode de joc">
        <button
          className={`party-switch-option ${!partyMode ? "is-active" : ""}`}
          onClick={() => setPartyMode(false)}
          aria-label="Mode normal"
          aria-pressed={!partyMode}
        >
          😇
        </button>
        <button
          className={`party-switch-option ${partyMode ? "is-active" : ""}`}
          onClick={() => !partyMode && setShowPartyNotice(true)}
          aria-label="Mode festa"
          aria-pressed={partyMode}
        >
          😈
        </button>
      </div>
      <h2>Municipis</h2>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionAB', 'population')}>1vs1 | Població</button>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionAB', 'altitude')}>1vs1 | Altitud</button>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionAB', 'surface')}>1vs1 | Superfície</button>
      <h2>Comarques</h2>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionTest', 'capital')}>Test | Capital</button>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionTest', 'comarca')}>Test | Comarques</button>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionTest', 'provincia')}>Test | Provincies</button>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionMap', 'municipiComarca')}>Mapa | Comarques</button>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionMap', 'locateComarca')}>Mapa | Localitza comarca</button>
      <h2>Muntanyes</h2>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionTest', 'mountainPeak')}>Test | Cims</button>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionTest', 'mountainRange')}>Test | Serralades</button>
    </div>
  );
}

export default GameMenu;
