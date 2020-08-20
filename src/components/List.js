import React from 'react';
const List = ({value, onClick}) => {
    return(
        <div className="todoList-child"><li>{value}</li><button onClick={() => {onClick(value)}}>RemoveToDoItem</button></div>
    )
}

export default List;