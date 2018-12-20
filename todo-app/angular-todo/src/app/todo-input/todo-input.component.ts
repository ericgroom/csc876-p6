import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-todo-input",
  templateUrl: "./todo-input.component.html",
  styleUrls: ["./todo-input.component.css"]
})
export class TodoInputComponent implements OnInit {
  text: string = "";

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  addTodo(): void {
    this.todoService.addTodo(this.text);
    this.text = "";
  }
}
