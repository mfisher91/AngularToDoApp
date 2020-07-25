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
  getAllTodos(order: string): ToDo[] {
    let orderedTodos = null;

    // Order the todos
    switch(order) {
      case "date desc":
        orderedTodos = this.todos.sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());
        break;
      case "date asc":
        orderedTodos = this.todos.sort((a, b) => new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime());
        break;
      case "title desc": 
        orderedTodos = this.todos.sort((a, b) => {
          if(a.title < b.title) return 1;
          if(a.title > b.title) return -1;
          return 0;
        });
        break;
      case "title asc":
        orderedTodos = this.todos.sort((a, b) => {
          if(a.title < b.title) return -1;
          if(a.title > b.title) return 1;
          return 0;
        });
        break;
    }

    return orderedTodos;
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
