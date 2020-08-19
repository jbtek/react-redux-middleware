import {ADD_TODO,REMOVE_TODO} from "../constants/constants";

const initialState = {
  id:0,
  text: "",
  todoList: []
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TODO:
      console.log(action.text, ":::", action.id);
      return {
        ...state,
        id:action.id,
        text: action.text,
        todoList: [...action.todoList]
      }

      case REMOVE_TODO:
          console.log("REMOVE_TODO:::", action.text);
          return {
              ...state,
              text: null,
              todoList: state.todoList.filter(value => value!== action.text)
          }
    default:
      return state;
  }
};
export default todoReducers;
