import React from 'react';
const List = ({key,item, onClick}) => {
    return(
        <div className="todoList-child"><li key={key}>{item}</li><button key={key + 'button'} onClick={() => {onClick(item)}}>RemoveToDoItem</button></div>
    )
}

export default List;