import React from 'react'
import Label from '../../components/Label'
/**
 *
 * @param item
 * @returns {*}
 * @constructor
 */
const User  = ({value, loading}) => {
    const userElem = !loading ? (<div className='user-details'>
        <Label label='Name' value={value.name}></Label>
        <Label label='Phone' value={value.phone}></Label>
    </div>) : <label>data is loading...</label>
    return(userElem)


}
export default User