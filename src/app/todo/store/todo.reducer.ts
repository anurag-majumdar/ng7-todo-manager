import * as TodoActions from './todo.actions';
import { Todo } from '../../todo/models/todo-model';
import { TodosState } from './todo.state';

export type Action = TodoActions.All;

const initialTodoState: TodosState = {
    todos: [],
    loading: false
};

export function todoReducer(state: TodosState = initialTodoState, action: Action) {

    switch (action.type) {
        case TodoActions.LOAD_TODOS:
            return { ...state, loading: true };
        case TodoActions.LOAD_TODOS_SUCCESS:
            return { ...state, todos: [...action.payload], loading: false };
        case TodoActions.ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload], loading: true };
        case TodoActions.ADD_TODO_SUCCESSS:
            return { ...state, loading: false };
        case TodoActions.DELETE_TODO:
            return { ...state, todos: [...state.todos.filter(todo => todo.id !== action.payload.id)], loading: true };
        case TodoActions.DELETE_TODO_SUCCESS:
            return { ...state, loading: false };
        case TodoActions.TOGGLE_TODO:
            const todo = state.todos.filter(todo => todo.id === action.payload.id)[0];
            todo.isCompleted = !todo.isCompleted;
            return { ...state, todos: [...state.todos], loading: false };
        default:
            return state;
    }

}