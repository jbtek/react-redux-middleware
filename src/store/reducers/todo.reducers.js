import {ADD_TODO,REMOVE_TODO} from "../constants/constants";
import {addItemToDoList} from "../../utils";

const initialState = {
  todoList: []
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TODO:
      console.log(action.text, ":::");
      return {
        ...state,
        todoList: addItemToDoList(state.todoList,action.text)
      }

      case REMOVE_TODO:
          console.log("REMOVE_TODO:::", action.text);
          const removedTodList = state.todoList.filter(value => value.id!== action.id)
          return {
              ...state,
              todoList: removedTodList
          }
    default:
      return state;
  }
};
export default todoReducers;
