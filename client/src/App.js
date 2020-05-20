import React from 'react';
import './App.css';
import UserContainer from "./components/UserTodo/UserContainer"
import Preview from "./components/Preview/Prewiew";
import HeaderContainer from "./components/Header/HeaderContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './redux/reducer'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


const store = createStore(mainReducer);

class App extends React.Component {
    constructor(props){
        super(props)


    }
    componentDidMount() {

    }
    render() {

    return (
        <Provider store={store}>
            <Router>
                <HeaderContainer />
                <Switch>
                    <Route exact path="/" component={Preview}/>
                    <Route  path="/register" component={RegisterContainer}/>
                    <Route  path="/login" component={LoginContainer}/>
                    <Route  path="/user" component={UserContainer}/>
                </Switch>
            </Router>
        </Provider>
    );
}






};

export default App;
