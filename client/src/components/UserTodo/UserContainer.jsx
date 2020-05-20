import React from "react";
import User from "./User";

import {connect} from "react-redux";
import {setToken, removeToken} from "../../redux/login/actions";
import {setAllTodos, removeAllTodos, removeTodo} from '../../redux/userTodo/actions'


class UserContainer extends React.Component {
    constructor(props) {
        super(props)
        this.abortConroller = new AbortController()
    }
componentWillUnmount() {
    this.abortConroller.abort()
}

    render() {
        return(
            <User
                token={this.props.token}
                removeToken={this.props.removeToken}
                setAllTodos = {this.props.setAllTodos}
                todos={this.props.todos}
                removeAllTodos = {this.props.removeAllTodos}
                removeTodo = {this.props.removeTodo}
            />
        );

    }
}
const mapStateToProps = (state) => {
    return {
        token:state.login.token,
        todos:state.todo
    }
};

const mapDispatchToProps =  {
    setToken,
    removeToken,
    setAllTodos,
    removeAllTodos,
    removeTodo
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)