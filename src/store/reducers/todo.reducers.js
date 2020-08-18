const initialState = {
  id:0,
  text: "",
  todoList: []
};

const todoReducers = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action.text, ":::", action.id);
      return {
        ...state,
        text: action.text
      };
    default:
      return initialState;
  }
};
export default todoReducers;
