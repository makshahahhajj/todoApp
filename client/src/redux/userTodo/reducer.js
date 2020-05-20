const todos = [

]



 const todoReducer = (state = todos, action) => {

    switch (action.type) {
       case 'setAllTodos': 
            return [...state, action.payload]
        case 'removeAllTodos': 
            return [];
        case 'removeTodo':
            return state.filter((data) =>
                data.todo !== action.payload
            );
        default:return state
}

};

 module.exports = todoReducer;