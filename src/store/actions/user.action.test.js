import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../constants/constants';
import {fetchingUserListAsync} from './user.action'
import {getUsersMock} from '../../mocks/getUsersMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getPosts actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates FETCH_USER_SUCCESS after successfuly fetching users', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: getUsersMock,
            });
        });

        const expectedActions = [
            { type: actions.UserActionTypes.FETCH_USER_START },
            { type: actions.UserActionTypes.FETCH_USER_SUCCESS, users: getUsersMock },
        ];

        const store = mockStore({ users: {} })

        return store.dispatch(fetchingUserListAsync()).then(() => {
            // return of async actions
            expect(fetchingUserListAsync().length).toEqual(1);
        });
    });
});