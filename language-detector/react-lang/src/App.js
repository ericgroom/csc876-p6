import React, { Component } from "react";
import LanguageDetector from "./components/LanugageDetector";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LanguageDetector />
      </div>
    );
  }
}

export default App;
