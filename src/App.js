import React from "react";
import "./styles.css";
import AddToDo from "./containers/todo/AddToDo";
import ToDoList from "./containers/todo/ToDoList";
import Users from "./containers/user/Users"
import {UsersContainerStyled} from "./styles/app.style";
import GlobalFont from './assets/fonts/GlobalFont'

let App = () => {
  return (
    <div className="App">
     <GlobalFont/>
     <div className='todo-container'>
      <AddToDo />
      <ToDoList/>
     </div>
        <UsersContainerStyled>
            <Users/>
        </UsersContainerStyled>
    </div>

  );
}
export default App

