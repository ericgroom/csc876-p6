import { Component, OnInit } from "@angular/core";
import { Todo } from "../Todo";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  removeCompleted(): void {
    if (
      confirm(
        "Are you sure you want to delete all completed todos from your list?"
      )
    ) {
      this.todoService.removeCompleted();
    }
  }
}
