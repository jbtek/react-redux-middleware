import React from "react";
import "./styles.css";
import AddToDo from "./containers/todo/AddToDo";
import ToDoList from "./containers/todo/ToDoList";
import Users from "./containers/user/Users"
import {UsersContainerStyled} from "./styles/app.style";
import GlobalFont from './assets/fonts/GlobalFont'
import Posts from "./containers/posts/Posts";

let App = () => {
  return (
    <div className="App">
     <GlobalFont/>
     <div className='todo-container'>
      </div>
        <UsersContainerStyled>
            <Posts/>
        </UsersContainerStyled>
    </div>

  );
}
export default App

