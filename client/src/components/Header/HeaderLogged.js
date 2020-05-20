import React from "react";
import {Link} from "react-router-dom";

class HeaderLogged extends React.Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);



    }

    componentDidMount() {
        this.props.removeToken();
    }

    signOut = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenLogged');
        // window.location.reload();

        console.log(this.props.token);
    };


    render() {


            return(
                <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
            <Link to='/'><p className="brand">Max-company</p></Link>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item create-todo">
            <Link to='/user' className="create-todo ">Create ToDo</Link>
    </li>
    <li className="nav-item create-todo">
    <button className="create-todo" onClick={this.signOut}>Sign out</button>
    </li>
    </ul>
    </div>
    </nav>

            );
        }


}


export default HeaderLogged;