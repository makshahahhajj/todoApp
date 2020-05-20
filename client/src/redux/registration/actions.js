
export let setEmail = (email) => {
    return{
        type:'setEmail',
        payload: email
    }
};

export let setPassword = (password) => {
    return{
        type:'setPassword',
        payload:password
    }
};

export const setName = (name) => {
    return{
        type:'setName',
        payload:name
    }
};
export const setLogin = () => {
    return{
        type:'setLogin'
    }
};