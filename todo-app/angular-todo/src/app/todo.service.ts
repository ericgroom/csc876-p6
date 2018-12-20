import { Injectable, OnDestroy, HostListener } from "@angular/core";
import { Todo } from "./Todo";

@Injectable({
  providedIn: "root"
})
export class TodoService implements OnDestroy {
  todos: Todo[];
  constructor() {
    try {
      this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    } catch (e) {
      this.todos = [];
    }
    window.addEventListener("beforeunload", this.save.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener("beforeunload", this.save.bind(this));
  }

  @HostListener("window:beforeunload", ["$event"])
  beforeUnloadHandler(): boolean {
    return false;
  }

  @HostListener("window:unload", ["$event"])
  unloadHandler(): void {
    this.save();
  }

  save(): void {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  getTodos(): Todo[] {
    return this.todos;
  }
  nextId(): number {
    return this.todos.reduce((max, todo) => Math.max(max, todo.id), 0) + 1;
  }
  addTodo(name: string): void {
    if (name) {
      const todo: Todo = { id: this.nextId(), name, completed: false };
      this.todos.push(todo);
    }
  }
  removeCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}
