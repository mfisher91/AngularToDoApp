import { Component } from '@angular/core';
import { ToDoDataService } from './to-do-data.service';
import { ToDo } from './to-do';

@Component({
  selector: 'app-root',
  templateUrl: './to-do.html',
  styleUrls: ['./to-do.component.css'],
  providers: [ToDoDataService]
})
export class ToDoComponent {
  newTodo: ToDo = new ToDo();
  display: string = 'all';
  order: string = 'date desc';

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(private todoDataService: ToDoDataService) {
  }

  // Service is now available as this.todoDataService
  toggleTodoComplete(todo) {
    this.todoDataService.toggleToDoComplete(todo);
  }

  addToDo() {
    this.todoDataService.addToDo(this.newTodo);
    this.newTodo = new ToDo();
    this.showIncompleteToDos();
  }

  toggleToDoComplete(todo) {
    this.todoDataService.toggleToDoComplete(todo);
  }

  removeToDo(todo) {
    this.todoDataService.deleteToDoById(todo.id);
  }

  get toDos() {
    return this.todoDataService.getAllTodos(this.order);
  }

  get remainingToDoCount() {
    return this.todoDataService.getRemainingToDoCount();
  }

  showAll() {
    this.display = "all";
  }

  showCompleteToDos() {
    this.display = "complete";
  }

  showIncompleteToDos() {
    this.display = "incomplete";
  }
}
