import {ADD_TODO,REMOVE_TODO} from "../constants/constants";

const initialState = {
  id:-1,
  text: "",
  todoList: []
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TODO:
      console.log(action.text, ":::", action.id);
          state.id++;
      const newTodoList = [];
      state.todoList.push({id:state.id, text:action.text});
      console.log('newTodoList::', newTodoList);
      return {
        ...state,
        id:state.id,
        text: action.text,
        todoList: [...state.todoList]
      }

      case REMOVE_TODO:
          console.log("REMOVE_TODO:::", action.text);
          const removedTodList = state.todoList.filter(value => value.text!== action.text)
          if(removedTodList.length === 0){
              state.id = -1
          }
          return {
              ...state,
              text: null,
              todoList: removedTodList,
              id:state.id
          }
    default:
      return state;
  }
};
export default todoReducers;
