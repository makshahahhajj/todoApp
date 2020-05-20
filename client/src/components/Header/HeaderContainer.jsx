import React from "react";
import Header from "./Header";

import {connect} from "react-redux";
import {setToken, removeToken,removeLogin} from "../../redux/login/actions";
import {removeAllTodos} from '../../redux/userTodo/actions' 



class HeaderContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Header
            token={this.props.token}
            setToken={this.props.setToken}
            removeToken={this.props.removeToken}
            removeLogin={this.props.removeLogin}
            removeAllTodos={this.props.removeAllTodos}
            />
        );

    }
}
const mapStateToProps = (state) => {
    return {
        token:state.login.token
    }
};

const mapDispatchToProps =  {
    setToken,
    removeToken,
    removeLogin,
    removeAllTodos
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)