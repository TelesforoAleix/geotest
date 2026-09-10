import React from "react";
import HeaderButtons from "./HeaderButtons";
import HeaderLogo from "./HeaderLogo";
import HeaderScores from "./HeaderScores";

function Header({ menuButton, questionTest, questionAB }) {
  return (
    <header className="header-content">
      <HeaderButtons
        menuButton={menuButton}
        questionTest={questionTest}
        questionAB={questionAB}
      />
      <HeaderLogo />
      <HeaderScores />
    </header>
  );
}

export default Header;
