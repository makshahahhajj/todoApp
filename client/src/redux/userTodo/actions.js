
export let setAllTodos = (todos) => {
    return{
        type:'setAllTodos',
        payload: todos
    }
};

export let removeAllTodos = () => {
    return{
        type:'removeAllTodos'
    }
};

export let removeTodo = (todoname) => {
    return{
        type:'removeTodo',
        payload:todoname
    }
};