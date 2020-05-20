
import React from "react";
import Register from "./Register";
import {connect} from "react-redux";
import {setEmail , setName, setPassword , setLogin} from "../../redux/registration/actions";
import {removeAllTodos} from '../../redux/userTodo/actions'

class RegisterContainer extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Register
                name={this.props.name}
                password={this.props.password}
                email={this.props.email}
                setPassword={this.props.setPassword}
                setName={this.props.setName}
                setEmail={this.props.setEmail}
                login={this.props.login}
                setLogin={this.props.setLogin}
                removeAllTodos={this.props.removeAllTodos}

            />
        )
    }

};

const mapStateToProps = (state) => {
    return{
        email:state.register.email,
        password:state.register.password,
        name:state.register.name,
        login:state.register.login
    }
}
const mapDispatchToProps = {
        setEmail,
        setPassword,
        setName,
        setLogin,
        removeAllTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)