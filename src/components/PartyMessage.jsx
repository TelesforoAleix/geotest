import React, { useContext } from "react";
import ScoreContext from "./context/ScoreContext";
import GameContext from "./context/GameContext";

function PartyMessage() {
  const { partyMessage } = useContext(ScoreContext);
  const { partyMode } = useContext(GameContext);

  if (!partyMode || !partyMessage) {
    return null;
  }

  return <p className="party-message">{partyMessage}</p>;
}

export default PartyMessage;
