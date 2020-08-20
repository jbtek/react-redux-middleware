import React  from 'react';
import {connect} from 'react-redux'
import {removeTodo} from "../store/actions/todo.action";
import List from "../components/List";

/**
 * always put key in component not inside it liek List has key and item.
 * @param text
 * @param todoList
 * @param onClick
 * @returns {*}
 * @constructor
 */
let ToDoList = ({text,todoList, onClick}) => {
    return (
           <ul className="todoList">{
               todoList.map((item) => {
                return <List key={item.id.toString()} value={item.text} onClick={onClick}/>
               })
           }
           </ul>
    )
}

const mapStateToProps = (state, props) => ({
    todoList: state.todo.todoList,
    text:state.todo.text
});

const mapDispatchToProps = (dispatch, props) => ({
    onClick: (item) => {
        dispatch(removeTodo(item));
    }
});

ToDoList = connect(mapStateToProps,mapDispatchToProps)(ToDoList)

export default ToDoList