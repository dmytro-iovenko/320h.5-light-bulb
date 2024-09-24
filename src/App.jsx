import bulbOn from "./assets/bulb-on.png";
import bulbOff from "./assets/bulb-off.png";

import "./App.css";
import { useState } from "react";

function App() {
  const [isBulbLit, setIsBulbLit] = useState(true);

  const toggleSwitch = (e) => {
    setIsBulbLit((status) => !status);
  };

  return (
    <div>
      <h1>This room is {isBulbLit ? "LIT" : "UnLIT"}</h1>
      <img src={isBulbLit ? bulbOn : bulbOff} alt="light bulb" />
      <div className={isBulbLit ? "switch" : "switch dark"} onClick={toggleSwitch}>
        <div className="switch-button"></div>
      </div>
    </div>
  );
}

export default App;
