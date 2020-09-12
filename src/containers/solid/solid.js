import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
//Note: If you do want to use div as wrapping container we can use Fragment as container.
const SolidContainer = () => {
    const NestedRoute = <Fragment>
        <ul>
            <li>
                <Link path='/'>Single Responsiblity</Link>
            </li>
            <li>
                <Link path='/openclosed'>Open Closed</Link>
            </li>
            <li>
                <Link path='/liskov'>Liskov Subtitution</Link>
            </li>
            <li>
                <Link path='/interface-segregation'>Interface Segregation</Link>
            </li>
            <li>
                <Link path='/dependencies-inversion'>Dependencies Inversion</Link>
            </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
    <Switch>
        <Route exact path='/' component={ToDoContainer}/>
        <Route exact path='/openclosed' component={Users}/>
        <Route component={PageNotFound}/>
    </Switch>
    </Suspense>
    </Fragment>
    return (
        NestedRoute
    )
}