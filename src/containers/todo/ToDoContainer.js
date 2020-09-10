import React from 'react';
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
const ToDoContainer = () => {
    return (
        <div className="todo-container">
        <AddToDo />
        <ToDoList/>
        </div>
      )
}
export default ToDoContainer