import React from "react";
import "./styles.css";
import AddToDo from "./containers/AddToDo";
import ToDoList from "./containers/ToDoList";

let App = () => {
  return (
    <div className="App">
      <AddToDo />
      <ToDoList/>
    </div>
  );
}
export default App

