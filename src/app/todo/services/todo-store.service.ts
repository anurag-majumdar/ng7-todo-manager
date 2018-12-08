import { Injectable } from '@angular/core';
import { Todo } from '../models/todo-model';

@Injectable()
export class TodoService {

  constructor() {
    if (this.isStoreEmpty()) {
      this.setTodosIntoStore([]);
    }
  }

  private getTodosFromStore() {
    return JSON.parse(localStorage.getItem('todos'));
  }

  private setTodosIntoStore(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  private isStoreEmpty() {
    const todos: Todo[] = this.getTodosFromStore();
    if (!todos) {
      return true;
    }
    return false;
  }

  public addTodo(todo: Todo) {
    const todos: Todo[] = this.getTodosFromStore();
    if (!todos) {
      this.setTodosIntoStore([todo]);
    } else {
      todos.push(todo);
      this.setTodosIntoStore(todos);
    }
  }

  public fetchTodos(): Todo[] {
    const todos: Todo[] = this.getTodosFromStore();
    return todos;
  }

  public deleteTodo(todo: Todo) {
    let todos: Todo[] = this.getTodosFromStore();
    todos = todos.filter(storeTodo => storeTodo.id !== todo.id);
    this.setTodosIntoStore(todos);
  }

  public toggleTodo(todo: Todo): void {
    const todos: Todo[] = this.getTodosFromStore();
    const filteredTodo: Todo = todos.filter(todoItem => todoItem.id === todo.id)[0];
    filteredTodo.isCompleted = todo.isCompleted;
    this.setTodosIntoStore(todos);
  }

}
