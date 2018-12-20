import React from "react";
import "./TodoList.css";

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    if (!todos || todos.length === 0) {
      return <p className="no-items">You finished all your todos!</p>;
    }
    return (
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <label htmlFor={`check-${todo.id}`}>
              <input
                type="checkbox"
                id={`check-${todo.id}`}
                checked={todo.completed}
                onChange={this.props.toggleCompleted.bind(this, todo.id)}
              />
              <span className={todo.completed ? "strike" : ""}>
                {todo.name}
              </span>
            </label>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
