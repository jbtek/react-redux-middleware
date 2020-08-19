import React  from 'react';
import {connect} from 'react-redux'
import {removeTodo} from "../store/actions/todo.action";
let ToDoList = ({text,todoList, onClick}) => {
    return (
           <ul className="todoList">{
               todoList.map((item,index) => {
                return <div className="todoList-child"><li key={index.toString()}>{item}</li><button key={index.toString() + 'button'} onClick={() => {onClick(item)}}>RemoveToDoItem</button></div>
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