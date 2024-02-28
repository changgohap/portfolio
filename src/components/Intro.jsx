import React, { useState } from "react";

export default function Intro() {
  const [isClicked, setIsClicked] = useState(false);

  const handleTextClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div id="intro">
      <div className="intro__logo">
        <img src="images/intro_logo.png" alt="intro_logo" />
      </div>
      <p className={isClicked ? "rotate-text" : ""} onClick={handleTextClick}>
        CHANGGEUN'S
      </p>
      <p>PORTFOLIO</p>
    </div>
  );
}
