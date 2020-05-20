import {combineReducers} from "redux";
import registerReducer from './registration/reducers'
import loginReducer from './login/reducer';
import todoReducer from './userTodo/reducer'

export default combineReducers({
    register:registerReducer,
    login:loginReducer,
    todo:todoReducer
});