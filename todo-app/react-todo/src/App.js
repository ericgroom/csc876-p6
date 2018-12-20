import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Todo App</header>
        <main>
          <Todo />
        </main>
        <footer>Created by Eric Groom</footer>
      </div>
    );
  }
}

export default App;
