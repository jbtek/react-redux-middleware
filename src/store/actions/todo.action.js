import {ADD_TODO} from "../constants/constants";

let nextTodoId = 0;
export const addTodo = (text,todoList) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
  todoList
});
