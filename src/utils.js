export const addItemToDoList = (todoList, text) => {
    let newTodoList = [];
    const isTodoExist = todoList.find(value => value.text === text)
    if(!isTodoExist){
        let id = todoList.length;
        newTodoList = [...todoList, {id:id, text:text, count:1}];
    } else {
        newTodoList = todoList.map(todo =>{
            if(todo.text === text){
                todo.count++;
            }
            return todo;
        });
    }
    console.log('newTodoList::', newTodoList);
    return newTodoList;
}