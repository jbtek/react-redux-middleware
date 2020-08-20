import React from 'react';
const List = ({value, onClick}) => {
    return(
        <div className="todoList-child">
            <li>
                <span>{'item:' + value.text}</span>
                <span>{'count:' + value.count}</span>
            </li>
            <button onClick={() => {onClick(value)}}>RemoveToDoItem</button>
        </div>
    )
}

export default List;