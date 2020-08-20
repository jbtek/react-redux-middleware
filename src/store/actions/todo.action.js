import {ADD_TODO, REMOVE_TODO} from "../constants/constants";

export const addTodo = (text) => ({
  type: ADD_TODO,
  text
});

export const removeTodo = (text) => ({
    type: REMOVE_TODO,
    text: text
});
