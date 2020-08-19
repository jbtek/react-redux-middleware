import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/todo.action";
let AddToDo = ({ onClick, text }) => {
  return (
    <div className="todoinput">
      <input
        type="text"
        onChange={(e) => (input = e.target.value)}
        placeholder="Enter a item"
      />
      <button onClick={onClick}>Add Todo List</button>
      <p>{text}</p>
    </div>
  );
};
let input;
let todoList = []
/**
 * this will get props of particular state that is changed after any actions and pass it like
 * prop in this components, and any state props will be available for this component.
 * if we pass (state,ownProps): then it will change if either one is changed.
 * @param state
 * @returns {{text: *}}
 */
const mapStateToProps = (state, props) => ({
  text: state.todo.text
});

/**
 *
 * @param dispatch
 * @param props
 * @returns {{onClick: onClick}} object
 * this dispatch the action with data to reducer and when updated then mapStateToProps props
 * get updated state and props.
 */
const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
      todoList.push(input);
    dispatch(addTodo(input,todoList));
  }
});

AddToDo = connect(mapStateToProps, mapDispatchToProps)(AddToDo);
export default AddToDo;
