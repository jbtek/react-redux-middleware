import React,{Suspense, lazy} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
/**
 * difference between router component pros and reder pros:
 * component prop: component create new instance of the component and it will go through the
 * lifecycle constructor, componentWillmount, componentDidMount.
 * So if we goto next and prev it will mounted, unmounted and again mounted.
 * Ex:<Route path="/:locale/store">
        <Store /> //calling as new component.
    </Route>

 * render prop: it will call as function and it did not create any new instances
 * of component. if component instance already created then it will just return that
 * comopnent. EX.
 * <Route path="/:locale/store">
    {Store()}//calling as function
    </Route>
 */
const DynamicRouters = () => {
    const ToDoContainer = lazy(() => import('../containers/todo/ToDoContainer'));
    const Users = lazy(() => import('../containers/user/Users'));
    const Posts = lazy(() => import('../containers/posts/Posts'));
    const SolidPrinciples = lazy(() => import('../containers/solid/solid'));
    const PageNotFound = lazy(() => import('../containers/pagenotfound/PageNotFound'));
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
        <li>
            <Link to='/solid'>S.O.L.I.D</Link>
        </li>
    </ul>
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
        <Route exact path='/' component={ToDoContainer}/>
        <Route exact path='/users' component={Users}/>
        <Route exact path='/posts' component={Posts}/>
        <Route exact path='/solid' component={SolidPrinciples}/>
        <Route component={PageNotFound}/>
    </Switch>
    </Suspense>
    </div>
    return(routes)
}

export default DynamicRouters