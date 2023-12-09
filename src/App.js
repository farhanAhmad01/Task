import React from "react";
import "./App.css";
import Api from "./Api";
import Task from "./Task";

function App() {
  return (
    <div className="App">
      <h1>Api Fetchin Data</h1>
      <Api/>
      {/* <Task/> */}
    </div>
  );
}

export default App;
