import React from "react";
import axios from 'axios';
import {Redirect} from "react-router-dom";



class  Login extends React.Component {
 constructor(props){
     super(props)
     this.onSubmit = this.onSubmit.bind(this);
     this.onEmailChange = this.onEmailChange.bind(this);
     this.onPasswordChange = this.onPasswordChange.bind(this);
     this.signIn  = this.signIn.bind(this);


 }
 componentDidMount() {

     this.props.removeAllTodos();
     if( localStorage.getItem('tokenLogged') ==='logged' ) {
         this.props.setLogin();
     }

 }

    onEmailChange = (event) =>{
     this.props.setEmail(event.target.value);

 };

 onPasswordChange = (event) =>{
     this.props.setPassword(event.target.value);
 };

 signIn =  async (email,password) => {
     let url = 'http://localhost:8080/login';
     let data = {
         password,
         email
     };
     let json = JSON.stringify(data);

     await axios.post(url,json,{
         headers:{
             'Content-type':'application/json',
             'Access-Control-Allow-Origin': '*',
             'Access-Control-Allow-Methods':'POST',
             'Accept':'application/json, text/plain, */*'
         }
     }).then((data) =>{

         if(data.data === 'Email не найден'){
             alert('Пользователя не существует')
             return;
         } else if(data.data === 'Пароль неверный'){
             alert('Пароль неверный');
            return;
         };
         this.props.setToken(data.data);
         localStorage.setItem('token', data.data);
         localStorage.setItem('tokenLogged', 'logged');
         this.props.setToken();
         this.props.setLogin();

     });
 };

 onSubmit = (e) => {
     e.preventDefault();
     let email = this.props.email;
     let password = this.props.password;
     this.signIn(email, password);
 };

render() {
    if (this.props.login === false) {
        this.props.removeAllTodos();
        return (
            <div>
                <div className="text">
                    <h1>Log in Form</h1>

                </div>
                <div className="form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail"
                                   aria-describedby="emailHelp"
                                   placeholder="Enter email" onChange={this.onEmailChange} value={this.props.email}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword"
                                   placeholder="Password"
                                   onChange={this.onPasswordChange} value={this.props.password}/>
                        </div>
                        <input type="submit" className="btn btn-primary" id="submit" value="Log in"
                               onClick={this.onSubmit}/>
                    </form>
                </div>
            </div>
        )
    }
    else {
        return <Redirect to={'/'}/>

    }


}

};

export default Login;