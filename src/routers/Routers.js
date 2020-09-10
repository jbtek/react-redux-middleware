import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Users from '../containers/user/Users';
import ToDoContainer from '../containers/todo/ToDoContainer';
import Posts from '../containers/posts/Posts';
import PageNotFound from '../containers/pagenotfound/PageNotFound';
import { UsersContainerStyled } from '../styles/app.style';


const Routers = () => {
    const routes =
    <div className='router-container'> 
    <ul>
        <li>
            <Link to='/'>ToDo</Link>
        </li>
        <li>
            <Link to='/users'>Users</Link>
        </li>
        <li>
            <Link to='/posts'>Posts</Link>
        </li>
    </ul>
    <Switch>
        <Route exact path='/' component={ToDoContainer}/>
        <Route exact path='/users' component={() => <UsersContainerStyled><Users/></UsersContainerStyled>}/>
        <Route exact path='/posts' component={() => <UsersContainerStyled><Posts/></UsersContainerStyled>}/>
        <Route component={PageNotFound}/>
    </Switch>
    </div>
    return(
        routes
    )
}

export default Routers;