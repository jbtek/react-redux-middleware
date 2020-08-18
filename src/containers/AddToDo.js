import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/ToDoAction";
let AddToDo = ({ onClick }) => {
  return (
    <div className="todoinput">
      <input
        type="text"
        onChange={(e) => (input = e.target.value)}
        placeholder="Enter a item"
      />
      <button onClick={onClick}>Add Todo List</button>
      <p>jaychandra {input}</p>
    </div>
  );
};
let input;
const mapStateToProps = () => ({
  text: input
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(addTodo(input));
  }
});

AddToDo = connect(mapStateToProps, mapDispatchToProps)(AddToDo);
export default AddToDo;
