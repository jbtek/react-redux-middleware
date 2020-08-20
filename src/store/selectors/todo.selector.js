import {createSelector} from 'reselect';

const getTodoState = (state) => state.todo;

export const getTodoList = createSelector(
    getTodoState,
    (todo) => todo.todoList
)