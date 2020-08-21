import { combineReducers } from "redux";
import todoReducers from "./todo.reducers";
import userReducers from "./user.reducer"

/**
 * this combined all the reducer and it will be a huge object(store) like this
 * {
 *     todo:{},
 *     user:{},
 *     list:{}
 * }
 */
const rootReducers = combineReducers({
  'todo': todoReducers,
  'users':userReducers
});
export default rootReducers;
