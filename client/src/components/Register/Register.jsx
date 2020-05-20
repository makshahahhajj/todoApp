import React from "react";
import './Register.css';
import axios from 'axios';
import {Redirect} from "react-router-dom";


class Register extends React.Component {

 constructor(props) {
     super(props);
     this.onSubmit = this.onSubmit.bind(this);
     this.onCheck = this.onCheck.bind(this);
     this.signUp = this.signUp.bind(this);
     this.setEmailText = this.setEmailText.bind(this);
     this.setPasswordText = this.setPasswordText.bind(this);
     this.setNameText = this.setNameText.bind(this);


 }
 componentDidMount() {
     console.log(this.props.login)
 }

    setNameText = (event) => {
        this.props.setName(event.target.value)
}
    setEmailText = (event) => {
        this.props.setEmail(event.target.value)
    }
    setPasswordText = (event) => {
        this.props.setPassword(event.target.value)
    }

    onCheck = (email, name, password) => {
        let checkEmail = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
        let checkName = name.match(/^([а-яё]+|[a-z]+)$/i);
        let checkPassword = password.match(/.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/);


        if(!checkEmail || !checkName || !checkPassword ){
            alert('Введенные данные неверны');
           return false;
        }else {
            return true;
        }


    };

  signUp = async (url, name, password, email) => {
      let data = {
          name,
          password,
          email
      };
      let json = JSON.stringify(data);


      return await axios.post(url,json,{
          headers:{
              'Content-type':'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods':'POST',
              'Accept':'application/json, text/plain, */*'
          },

      });
     // .then((data) => {
     //      localStorage.setItem('token', data.data);
     //      console.log(data)
     //  }).catch((err) => {
     //          return err;
     //      });

  };


  onSubmit = (e) => {


      e.preventDefault();
      let email = this.props.email;
      let password = this.props.password;
      let name = this.props.name;
      const check = this.onCheck(email,name,password);

      let url ='http://localhost:8080/register';

      if(check){
          this.signUp(url,name,password,email).then((data) =>{
              if(!data){


              }else {
                  this.props.setLogin();
                  alert('Вы успешно зарегистриорваны ');

              }
          });
      }
      else{
          return (
              <div>Вы не прошли авторизацию.</div>
          );
      }
  };

render(){
    if(this.props.login === 'registered') {

        return <Redirect to={'/login'}/>
    }else {
        return (

            <div>
                <div className="text">
                    <h1>Register Form</h1>
                </div>
                <div className="form">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail"
                                   aria-describedby="emailHelp"
                                   placeholder="Enter email" onChange={this.setEmailText} value={this.props.email}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword"
                                   placeholder="Password"
                                   onChange={this.setPasswordText} value={this.props.password}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputaName">Name</label>
                            <input type="text" className="form-control" id="exampleInputName"
                                   placeholder="Enter name" onChange={this.setNameText} value={this.props.name}/>
                        </div>
                        <input type="submit" className="btn btn-primary" id="submit" value="Submit"
                               onClick={this.onSubmit}/>
                    </form>
                </div>
            </div>
        );
    }
}

};

export default Register;