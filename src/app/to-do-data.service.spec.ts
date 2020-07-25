import { TestBed, async, inject } from '@angular/core/testing';

import { ToDoDataService } from './to-do-data.service';
import { ToDo } from './to-do';

describe('ToDoDataService', () => {
  let service: ToDoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllTodos()', () => {

    it('should return an empty array by default', inject([ToDoDataService], (service: ToDoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo1 = new ToDo({title: 'Hello 1', complete: false});
      let todo2 = new ToDo({title: 'Hello 2', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo1 = new ToDo({title: 'Hello 1', complete: false});
      let todo2 = new ToDo({title: 'Hello 2', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getToDoById(1)).toEqual(todo1);
      expect(service.getToDoById(2)).toEqual(todo2);
    }));

  });

  describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo1 = new ToDo({title: 'Hello 1', complete: false});
      let todo2 = new ToDo({title: 'Hello 2', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteToDoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteToDoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo1 = new ToDo({title: 'Hello 1', complete: false});
      let todo2 = new ToDo({title: 'Hello 2', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteToDoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });

  describe('#updateTodoById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo = new ToDo({title: 'Hello 1', complete: false});
      service.addToDo(todo);
      let updatedTodo = service.updateToDoById(1, {
        title: 'new title'
      });
      expect(updatedTodo.title).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo = new ToDo({title: 'Hello 1', complete: false});
      service.addToDo(todo);
      let updatedTodo = service.updateToDoById(2, {
        title: 'new title'
      });
      expect(updatedTodo).toEqual(null);
    }));

  });

  describe('#toggleTodoComplete(todo)', () => {

    it('should return the updated todo with inverse complete status', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo = new ToDo({title: 'Hello 1', complete: false});
      service.addToDo(todo);
      let updatedTodo = service.toggleToDoComplete(todo);
      expect(updatedTodo.complete).toEqual(true);
      service.toggleToDoComplete(todo);
      expect(updatedTodo.complete).toEqual(false);
    }));

  });
});
