import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../services/todo-store.service';

import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Todo } from '../models/todo-model';

import * as TodoActions from '../store/todo.actions';
import { TodosState } from '../store/todo.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  todosState$: Observable<TodosState>;

  constructor(private todoStoreService: TodoService, private store: Store<TodosState>) {
    this.todosState$ = this.store.select('todosState');
  }

  ngOnInit() {
    this.store.dispatch(new TodoActions.LoadTodos());
    // this.fetchTodos();
    // this.todosState$.subscribe((todosState: TodosState) => {
    //   console.log(todosState);
    //   // this.todos = todosState.todos;
    // });
  }

  fetchTodos() {
    // this.todos = this.todoStoreService.fetchTodos();
  }

  deleteTodo(todo: Todo) {
    // this.todoStoreService.deleteTodo(todo);
    // this.fetchTodos();
    this.store.dispatch(new TodoActions.DeleteTodo(todo));
  }

  toggleTodo(todo: Todo) {
    this.store.dispatch(new TodoActions.ToggleTodo(todo));
  }

  ngOnDestroy() {
  }

}
