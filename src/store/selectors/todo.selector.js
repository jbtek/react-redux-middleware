import {createSelector} from 'reselect';
import {memoize} from 'lodash'

const getTodoState = (state) => state.todo;

export const getTodoList = createSelector(
    getTodoState,
    (todo) => todo.todoList
)

/**
 * Now this is the function that get a id param and return the valus, so it will not memoized
 * because its call as function not as selector
 * Solution: Need to use lodash method memoize to work like a selector and wrape the
 * whole function in it. This is the HOC. like this.
 * @param id
 */
export const getDynamicData = (id) => memoize(
    createSelector(getTodoState,
        (todo) => todo.todoList.map(item => {
            return item.id === id
        }))
    )