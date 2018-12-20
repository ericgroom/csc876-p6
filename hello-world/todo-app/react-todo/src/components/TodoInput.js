import React from "react";
import "./TodoInput.css";

class TodoInput extends React.Component {
  state = {
    text: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.text) return;
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };
  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="todo-form">
        <label htmlFor="todo-input">
          <input
            type="text"
            id="todo-input"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Enter a new todo..."
            autoComplete="off"
          />
        </label>
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    );
  }
}

export default TodoInput;
