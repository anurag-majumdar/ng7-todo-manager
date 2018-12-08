import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as todoActions from './todo.actions';
import * as fromTodoService from '../../todo/services/todo-store.service';

import { map } from 'rxjs/operators';

@Injectable()
export class TodoEffects {

    constructor(private actions$: Actions,
        private todoService: fromTodoService.TodoService
    ) { }

    @Effect()
    addTodo$ = this.actions$
        .ofType(todoActions.ADD_TODO)
        .pipe(map((action: todoActions.AddTodo) => this.todoService.addTodo(action.payload)))
        .pipe(map(todos => new todoActions.AddTodoSuccess()));

    @Effect()
    loadTodos$ = this.actions$
        .ofType(todoActions.LOAD_TODOS)
        .pipe(map(() => new todoActions.LoadTodosSuccess(this.todoService.fetchTodos())));

    @Effect()
    deleteTodos$ = this.actions$
        .ofType(todoActions.DELETE_TODO)
        .pipe(map((action: todoActions.DeleteTodo) => this.todoService.deleteTodo(action.payload)))
        .pipe(map(() => new todoActions.DeleteTodoSuccess()));

    @Effect()
    toggleTodo$ = this.actions$
        .ofType(todoActions.TOGGLE_TODO)
        .pipe(map((action: todoActions.ToggleTodo) => this.todoService.toggleTodo(action.payload)))
        .pipe(map(() => new todoActions.ToggleTodoSuccess()));
}