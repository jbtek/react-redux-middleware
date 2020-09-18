import React, { Fragment, lazy, Suspense } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
//Note: If you do want to use div as wrapping container we can use Fragment as container.
const SolidPrinciples = ({match}) => {
    const SingleResponsibility = lazy(() => import('../../S.O.L.I.D/single-responsibility-principles/single-responsibility'));
    const OpenClosePrinciple =  lazy(() => import('../../S.O.L.I.D/open-close-principle/open-close'));
    const PageNotFound  =  lazy(() => import('../pagenotfound/PageNotFound'))
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
        <Route exact path='/' component={SingleResponsibility}/>
        <Route exact path='/openclosed' component={OpenClosePrinciple}/>
        <Route component={PageNotFound}/>
    </Switch>
    </Suspense>
    </Fragment>
    return (
        NestedRoute
    )
}
export default SolidPrinciples;