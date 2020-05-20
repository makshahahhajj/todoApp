
const defaultState = {
    password:'',
    email:'',
    login:false,
    token:false
};

const login = (state = defaultState, action) => {
    switch (action.type) {
        case 'setEmailLogin':
            return {
                ...state,
                email:action.payload
            }

        case 'setPasswordLogin' :
            return {
                ...state,
                password:action.payload
            };
        case 'setLogin' :
            return {
                ...state,
                login:true
            };
        case 'removeLogin' :
            return {
                ...state,
                login:false
            };
        case 'token' :
            return {
                ...state,
                token:true
            };
        case 'removeToken' :
            return {
                ...state,
                token:false
            };

        default:return state
    }

};

module.exports = login;