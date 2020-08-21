import {createSelector} from 'reselect'
const getUserList = state => state.users;
export const getUserFetchingSelector = createSelector(
    getUserList,
    (users) => users.isUserListFetching
)

export const getUserListSelector = createSelector(
    getUserList,
    (users) => users.userList
)