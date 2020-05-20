export let setEmail = (email) => {
    return{
        type:'setEmailLogin',
        payload: email
    }
};

export let setPassword = (password) => {
    return{
        type:'setPasswordLogin',
        payload:password
    }
};

export let setLogin = () => {
    return{
        type:'setLogin'
    }
};

export let removeLogin = () => {
    return{
        type:'removeLogin'
    }
};

export let setToken = () => {
    return{
        type:'token'
    }
};

export let removeToken = () => {
    return{
        type:'removeToken'
    }
};