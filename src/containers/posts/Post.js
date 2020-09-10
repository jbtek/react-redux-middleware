import React from 'react'
import Label from '../../components/Label'
/**
 *
 * @param item
 * @returns {*}
 * @constructor
 */
const Post  = ({value, loading}) => {
    let postElem = <div className='post-details'>
        <Label label='User Id' value={value.userId}/>
        <Label label='ID' value={value.id}/>
        <Label label='Title' value={value.title}/>
        <Label label='Body' value={value.body}/>
    </div>
    if(loading){
        postElem = <label>data is loading...</label> 
    }
    return(postElem)


}
export default React.memo(Post)