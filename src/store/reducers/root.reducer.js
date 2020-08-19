import { combineReducers } from "redux";
import todoReducers from "./todo.reducers";

/**
 * this combined all the reducer and it will be a huge object(store) like this
 * {
 *     todo:{},
 *     user:{},
 *     list:{}
 * }
 */
const rootReducers = combineReducers({
  'todo': todoReducers
});
export default rootReducers;
