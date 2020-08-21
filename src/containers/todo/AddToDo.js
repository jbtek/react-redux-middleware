import React from "react";
import { connect } from "react-redux";
import {getDynamicData, getTodoList} from '../../store/selectors/todo.selector'
import { addTodo } from "../../store/actions/todo.action";
let AddToDo = ({ onClick, todoList, todoListWihtParam }) => {
  return (
    <div className="todoinput">
      <input
        type="text"
        onChange={(e) => (input = e.target.value)}
        placeholder="Enter a item"
      />
        <span>{JSON.stringify(todoListWihtParam)}</span>
      <button onClick={onClick}>Add Todo List</button>
    </div>
  );
};
let input;
/**
 * this will get props of particular state that is changed after any actions and pass it like
 * prop in this components, and any state props will be available for this component.
 * if we pass (state,ownProps): then it will change if either one is changed.
 * @param state
 * @returns {{text: *}}
 * User Reselect(selectors) lib and on this function use it so that it will not render if
 * value/state is not changed,otherwise it will be rendered because state will be always create
 * new but value will be the same.
 * Selectors(getTodoList: it is available and sharable all over applicatio and selector
 * will memoized the data and once data is changed then it will triggered.
 * createStructuredSelector: it takes an objects of multiple selectors and no need to pass state.
 * it help out if we have dozens of selector call in a components.
 * pass the argument and return the state.
 */
const mapStateToProps = (state, props) => ({
        todoList: getTodoList,
        todoListWihtParam: getDynamicData(0)(state)
})

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
    dispatch(addTodo(input));
  }
});

AddToDo = connect(mapStateToProps, mapDispatchToProps)(AddToDo);
export default AddToDo;
