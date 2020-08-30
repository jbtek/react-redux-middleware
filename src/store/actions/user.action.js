import {UserActionTypes} from "../constants/constants";
import axios from 'axios'

export const fetchUserStart = () => ({
    type:UserActionTypes.FETCH_USER_START
})

export const fetchUserSuccess = (payload) => ({
    type:UserActionTypes.FETCH_USER_SUCCESS,
    payload:payload
})

export const fetchUserFailure = (payload) => ({
    type:UserActionTypes.FETCH_USER_FAILURE,
    payload:payload
})

/**
 * Redux-thunk is middleware that do some work before going to the store or dispating actions
 * to the store and update the state.
 * @returns {function(*): Promise<Response | never>}
 */
export const fetchingUserListAsync = () =>{
    return (dispatch) => {
        dispatch(fetchUserStart());
        // return fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(json => dispatch(fetchUserSuccess(json)))
        //     .catch(error => dispatch(fetchUserFailure(error.message)))
        return axios({
            url:'https://jsonplaceholder.typicode.com/users',
            responseType: "json"
        }).then(res => res.data)
            .then(json => {
                console.log('json::', json);
                dispatch(fetchUserSuccess(json))
            })
            .catch(error => dispatch(fetchUserFailure(error.message)))
    }
}