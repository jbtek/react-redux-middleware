/**
 * use common hooks useDataApi to handle the CRUD operations.
 * display all the posts from fake api jsonplaceholder.
 */
import React, {useState} from 'react';
import useDataApi from '../../hooks/useDataApi'
import Post from './Post'
import { UserContainerStyle } from '../user/user.style';
import { UsersContainerStyled } from '../../styles/app.style';
const Posts = () => {
    const {isLoading, newData, errorMsg} = useDataApi(null,'https://jsonplaceholder.typicode.com/posts','get', null);
    const [isCallBack, callBack2] = useState(true);
    setTimeout(() => {
        callBack2(false)
    },2000);
    let postListElm = newData.map(item => <UserContainerStyle key={item.id}><Post loading={isLoading} callBack={isCallBack} value={item}/></UserContainerStyle> )
    if(errorMsg){
        postListElm = <div>{errorMsg}</div>
    }
    return (<UsersContainerStyled>{postListElm}</UsersContainerStyled>)

}

export default React.memo(Posts)