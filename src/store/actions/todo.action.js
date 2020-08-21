import {TodoActionTypes} from "../constants/constants";
export const addTodo = (text) => ({
    type: TodoActionTypes.ADD_TODO,
    text
});

export const removeTodo = (text) => ({
    type: TodoActionTypes.REMOVE_TODO,
    text: text
});
