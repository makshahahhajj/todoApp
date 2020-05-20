import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import HeaderLogged from "../Header/HeaderLogged";




class Header extends React.Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);




    }

    componentDidMount() {
        if(localStorage.getItem('tokenLogged') === 'logged' ){
            this.props.setToken();
        } else {
            this.props.removeToken();
        }
        console.log(this.props.token);
    }


    signOut = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenLogged');
        // window.location.reload();
        this.props.removeToken();
        this.props.removeLogin();

    };

    render() {

if(this.props.token === true ) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <Link to='/'><p className="brand">Max-company</p></Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item create-todo">
                        <Link to='/user' className="create-todo "
                        >Create ToDo</Link>
                    </li>
                    <li className="nav-item create-todo">
                        <button className="create-todo" onClick={this.signOut}>Sign out</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
else{
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <Link to='/'><p className="brand">Max-company</p></Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item create-todo">
                        <Link to='/user' className="create-todo" >Create ToDo</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login">
                            <button className="btn btn-outline-light sign-in" type="button">Sign In</button>
                        </Link>
                    </li>

                    <li className="nav-item ">


                        <Link to="/register">
                            <button className="btn btn-outline-light " type="button">Sign Up</button>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>

    );

}

}



}


export default Header;