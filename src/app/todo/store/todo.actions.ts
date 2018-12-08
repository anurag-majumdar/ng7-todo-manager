import { Action } from '@ngrx/store';
import { Todo } from '../../todo/models/todo-model';

export const LOAD_TODOS = '[Todo] Load Todos';
export const LOAD_TODOS_FAIL = '[Todo] Load Todos Fail';
export const LOAD_TODOS_SUCCESS = '[Todo] Load Todos Success';

export const ADD_TODO = '[Todo] Add';
export const ADD_TODO_SUCCESSS = '[Todo] Add Todo Success';

export const UPDATE_TODO = '[Todo] Update';
export const UPDATE_TODO_SUCCESS = '[Todo] Update Success';

export const DELETE_TODO = '[Todo] Delete';
export const DELETE_TODO_SUCCESS = '[Todo] Delete Success';

export const TOGGLE_TODO = '[Todo] Toggle Todo';
export const TOGGLE_TODO_SUCCESS = '[Todo] Toggle Todo Success';

export class LoadTodos implements Action {
    readonly type = LOAD_TODOS;
}

export class LoadTodosFail implements Action {
    readonly type = LOAD_TODOS_FAIL;
    constructor(public payload: any) { }
}

export class LoadTodosSuccess implements Action {
    readonly type = LOAD_TODOS_SUCCESS;
    constructor(public payload: Todo[]) { }
}

export class AddTodo implements Action {
    readonly type = ADD_TODO;
    constructor(public payload: Todo) { }
}

export class AddTodoSuccess implements Action {
    readonly type = ADD_TODO_SUCCESSS;
}

export class EditTodo implements Action {
    readonly type = UPDATE_TODO;
    constructor(public payload: Todo) { }
}

export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;
    constructor(public payload: Todo) { }
}

export class DeleteTodoSuccess implements Action {
    readonly type = DELETE_TODO_SUCCESS;
}

export class ToggleTodo implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public payload: Todo) { }
}

export class ToggleTodoSuccess implements Action {
    readonly type = TOGGLE_TODO_SUCCESS;
}

export type All = AddTodo | AddTodoSuccess | EditTodo | DeleteTodo | DeleteTodoSuccess | LoadTodos | LoadTodosFail | LoadTodosSuccess | ToggleTodo | ToggleTodoSuccess;