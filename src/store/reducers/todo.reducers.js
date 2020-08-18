const initialState = {
  id:0,
  text: "",
  todoList: []
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
      case "ADD_TODO":
      console.log(action.text, ":::", action.id);
      return {
        ...state,
        text: action.text,
        todoList: action.todoList
      }
    default:
      return state;
  }
};
export default todoReducers;
