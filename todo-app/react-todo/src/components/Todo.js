import React from "react";
import TodoList from "./TodoList";
import "./Todo.css";
import TodoInput from "./TodoInput";

class Todo extends React.Component {
  state = {
    todos: []
  };
  componentDidMount() {
    try {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      this.setState({ todos });
    } catch (e) {
      console.log("creating new store");
    }
    window.addEventListener("beforeunload", () => {
      const todosString = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", todosString);
    });
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", () => {
      const todosString = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", todosString);
    });
  }
  handleToggleCompleted = id => {
    this.setState(({ todos }) => {
      return {
        todos: todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
        )
      };
    });
  };
  handleAddTodo = name => {
    this.setState(prevState => {
      const nextId =
        prevState.todos.reduce((max, todo) => Math.max(max, todo.id), 0) + 1;
      return {
        todos: [...prevState.todos, { id: nextId, name, completed: false }]
      };
    });
  };
  handleRemoveCompleted = () => {
    if (
      window.confirm(
        "Are you sure you want to delete all completed todos from your list?"
      )
    ) {
      this.setState(prevState => ({
        todos: prevState.todos.filter(todo => !todo.completed)
      }));
    }
  };
  render() {
    return (
      <section className="todo-root">
        <h1 className="todo-title">Todos</h1>
        <TodoInput addTodo={this.handleAddTodo} />
        <button onClick={this.handleRemoveCompleted}>Remove Completed</button>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.handleToggleCompleted}
        />
      </section>
    );
  }
}

export default Todo;
