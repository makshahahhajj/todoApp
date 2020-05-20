const defaultState = {
    name:'',
    password:'',
    email:'',
    login:'unregistered'
};

 const register = (state = defaultState, action) => {

    switch (action.type) {
        case 'setEmail':
            return {
                ...state,
                email:action.payload
            }

       case 'setPassword':
            return {
                ...state,
                password:action.payload
            };
        case 'setName':
            return {
                ...state,
                name:action.payload
            }
        case'setLogin':
            return {
                ...state,
                login:'registered'
            }
        default:return state
}

};

 module.exports = register;