import React  from 'react';
import {connect} from 'react-redux'
import {removeTodo} from "../store/actions/todo.action";
import List from "../components/List";
import {createStructuredSelector} from "reselect";
import {getTodoList} from "../store/selectors/todo.selector";

/**
 * always put key in component not inside child component ex: List has key and item.
 * @param text
 * @param todoList
 * @param onClick
 * @returns {*}
 * @constructor
 */
let ToDoList = ({todoList, onClick}) => {
    return (
           <ul className="todoList">{
               todoList.map((item) => {
                return <List key={item.id.toString()} value={item} onClick={onClick}/>
               })
           }
           </ul>
    )
}

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
 */
const mapStateToProps = createStructuredSelector({
    todoList:getTodoList
})

const mapDispatchToProps = (dispatch, props) => ({
    onClick: (item) => {
        dispatch(removeTodo(item));
    }
});

ToDoList = connect(mapStateToProps,mapDispatchToProps)(ToDoList)

export default ToDoList