import bulbOn from "./assets/bulb-on.png";
import bulbOff from "./assets/bulb-off.png";
import lightSwitchSound from "./assets/light-switch-sound.mp3";

import "./App.css";
import { useState } from "react";

function App() {
  const [isBulbLit, setIsBulbLit] = useState(true);

  const toggleSwitch = () => {
    new Audio(lightSwitchSound).play();
    setIsBulbLit((status) => !status);
  };

  const backgroundColor = isBulbLit ? "white" : "black";
  const color = isBulbLit ? "black" : "white";

  return (
    <div style={{ backgroundColor, color }}>
      <h1>This room is {isBulbLit ? "LIT" : "DARK"}</h1>
      <img src={isBulbLit ? bulbOn : bulbOff} alt="light bulb" />
      <div className={isBulbLit ? "switch" : "switch dark"} onClick={toggleSwitch}>
        <div className="switch-button"></div>
      </div>
    </div>
  );
}

export default App;
