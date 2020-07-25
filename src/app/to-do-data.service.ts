import { Injectable } from '@angular/core';
import { ToDo } from './to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {
  lastId: number = 0;
  todos: ToDo[] = [];

  constructor() { }

  // Simulate POST /todos
  addToDo(todo: ToDo): ToDoDataService {
    if(!todo.id) todo.id = ++this.lastId;
    todo.dateCreated = new Date();
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteToDoById(id: number): ToDoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateToDoById(id: number, values: Object = {}): ToDo {
    let todo = this.getToDoById(id);
    if(!todo) return null;
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): ToDo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getToDoById(id: number): ToDo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  // Toggle todo complete
  toggleToDoComplete(todo: ToDo) {
    let updatedToDo = this.updateToDoById(todo.id, {
      complete: !todo.complete
    });

    return updatedToDo;
  }

  // Get number of remaining todos 
  getRemainingToDoCount() {
    return this.todos.filter(todo => !todo.complete).length;
  }
}
