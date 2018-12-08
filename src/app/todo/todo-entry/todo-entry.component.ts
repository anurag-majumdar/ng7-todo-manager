import { Component, OnInit } from '@angular/core';
import { TodoService } from './../services/todo-store.service';

import { Store } from '@ngrx/store';
import { Todo } from '../models/todo-model';

import * as TodoActions from '../store/todo.actions';
import { TodosState } from '../store/todo.state';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {

  todoName: string = '';
  constructor(private todoStoreService: TodoService, private store: Store<TodosState>) { }

  ngOnInit() {
  }

  addTodo() {
    const todo: Todo = {
      id: Date.now(),
      name: this.todoName,
      isCompleted: false
    };

    // this.todoStoreService.addTodo(todo);
    this.store.dispatch(new TodoActions.AddTodo(todo));
    this.resetTodoName();
  }

  resetTodoName() {
    this.todoName = '';
  }

}
