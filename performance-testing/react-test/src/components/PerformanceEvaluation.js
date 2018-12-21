import React from "react";
import Table from "./Table";
import "./PerformanceEvaluation.css";

class PerformanceEvaluation extends React.Component {
  state = {
    items: [],
    index: 0
  };
  addRandom = quantity => {
    const start = new Date();
    for (let i = 0; i < quantity; i++) {
      this.setState(prevState => {
        const value = Math.random();
        const key = prevState.index + 1;
        return { items: [...prevState.items, { key, value }], index: key };
      });
    }
    const end = new Date();
    console.log("time to add:", end.getTime() - start.getTime());
  };
  sort = () => {
    const start = new Date();
    this.setState(prevState => {
      const sorted = prevState.items.slice().sort((a, b) => a.value - b.value);
      return { items: sorted };
    });
    const end = new Date();
    console.log("time to sort:", end.getTime() - start.getTime());
  };
  render() {
    return (
      <div className="performance-evaluation">
        <div className="controls">
          <button onClick={() => this.addRandom(5000)}>
            Add 5000 random items
          </button>
          <button onClick={() => this.sort()}>Sort Table</button>
        </div>
        <Table items={this.state.items} />
      </div>
    );
  }
}

export default PerformanceEvaluation;
