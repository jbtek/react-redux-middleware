import React,{Component} from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {getUserFetchingSelector, getUserListSelector} from "../../store/selectors/user.selector";
import {fetchingUserListAsync} from "../../store/actions/user.action";
import User from './User'
import {UserContainerStyle} from "./user.style";
import { UsersContainerStyled } from '../../styles/app.style';

/**
 * we can create a container with statefull component if want to use lifecycle
 * like componentDidMount where we can call rest api
 */
class Users extends Component{

    componentDidMount(){
        //initiate rest api here.
        console.log('componentDidMount:::::', this.props);
        //it provide us history, location match
        /**
         * history:
            action: "PUSH"
            block: ƒ block(prompt)
            createHref: ƒ createHref(location)
            go: ƒ go(n)
            goBack: ƒ goBack()
            goForward: ƒ goForward()
            length: 3
            listen: ƒ listen(listener)
            location: {pathname: "/users", search: "", hash: "", state: undefined, key: "ulo1gt"}
            push: ƒ push(path, state)
            replace: ƒ replace(path, state)
         */
        /**
         * 
         */
        /**
         * match:
            isExact: true
            params: {}
            path: "/users"
            url: "/users"
         */
        const {fetchingUserListAsync} = this.props;
        fetchingUserListAsync();
    }

    render(){
        console.log('HELOO:::',this.props);
        const {userList, isUserListFetching} = this.props;
        const userListElement = userList.map(item => <UserContainerStyle key={item.id}><User loading={isUserListFetching} value={item}/></UserContainerStyle> )
        return (
            <UsersContainerStyled>
            {userListElement}
            </UsersContainerStyled>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    isUserListFetching: getUserFetchingSelector,
    userList:getUserListSelector
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchingUserListAsync:() => dispatch(fetchingUserListAsync())
})
Users = connect(mapStateToProps,mapDispatchToProps)(Users)
export default React.memo(Users)