import {UserActionTypes} from "../constants/constants";
const initialState = {
    userList: [],
    isUserListFetching:false,
    errorMessage:undefined
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_START:
            return {
                ...state,
                isUserListFetching: true
            }
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                isUserListFetching:false,
                userList: action.payload
            }
        case UserActionTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                isUserListFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};
export default usersReducer;
