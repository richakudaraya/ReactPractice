import React from "react";
import ReactDOM from "react-dom";
import { ProgressBarContainer } from "./progressbar";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ProgressBarContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
