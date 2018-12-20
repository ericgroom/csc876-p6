import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { TodoInputComponent } from "./todo-input/todo-input.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoInputComponent,
    TodoListComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
