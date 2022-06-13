import React, { useState } from "react";
import Graph from "./Graph/Graph";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hey, do you wanna make a poll?</h1>
      <Graph />
      <Graph />
    </div>
  );
}

export default App;
