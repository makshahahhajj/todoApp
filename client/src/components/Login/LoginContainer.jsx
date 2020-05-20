import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {setEmail, setPassword, setLogin,setToken} from "../../redux/login/actions";
import {removeAllTodos} from '../../redux/userTodo/actions'

class LoginContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        this.props.removeAllTodos();
        return(
            <Login
            email={this.props.email}
            login={this.props.login}
            password={this.props.password}
            setEmail={this.props.setEmail}
            setPassword={this.props.setPassword}
            setLogin={this.props.setLogin}
            setToken={this.props.setToken}
            token={this.props.token}
            removeAllTodos={this.props.removeAllTodos}
        />
        );

    }
}

const mapStateToProps = (state) => {
    return{
        email:state.login.email,
        password:state.login.password,
        login:state.login.login,
        token:state.login.token
    }
};

const mapDispatchToProps = {
    setEmail,
    setPassword,
    setLogin,
    setToken,
    removeAllTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);