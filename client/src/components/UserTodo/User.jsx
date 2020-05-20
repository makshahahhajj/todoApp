import React from "react";
import './User.css';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import {TodoModel} from './TodoModel'

class User extends React.Component {
    constructor(props){
        super(props)
        this.getUsername = this.getUsername.bind(this);
        this.setTodos = this.setTodos.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            email:'',
            todo:''
        }
        this.abortConroller = new AbortController()
    }
    componentWillUnmount() {
        this.abortConroller.abort();
        this.setState = (state,callback)=>{
            return;
        };
    }

    getUsername =  () => {

         let url = 'http://localhost:8080/login/user';
         return  axios.get(url,{
             headers:{
            'webToken':localStorage.getItem('token')
        }
    });
    }
  addTodo = async (e) => {
    let data = JSON.stringify(this.state)
     await  axios.post('http://localhost:8080/login/addTodo', data ,{
          headers:{
              'Content-type':'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods':'POST',
              'Accept':'application/json, text/plain, */*'
          }

      }).then((data) => {
         console.log(data)
      });
        e.preventDefault();
        this.props.setAllTodos(this.state)
}

    setTodos =  async (email) =>{
        let data = {
            email:email
        };
        let json = JSON.stringify(data);

         await axios.post('http://localhost:8080/login/todo', json ,{
            headers:{
                'Content-type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':'POST',
                'Accept':'application/json, text/plain, */*'
            }

        }).then((data) => {
            data.data.forEach((todo) => {
                this.props.setAllTodos(todo);
            })
         });

    };




    componentDidMount() {

        if(!localStorage.getItem('token')){
        }else {
            this.getUsername().then((data) => {
                this.setState({
                    email:data.data
                });
                this.setTodos(data.data);
            });
            localStorage.setItem('init', true);

            this.props.removeAllTodos();
            console.log(this.props.todos);



}




    }


    render() {
        if(this.props.token === false){
            this.props.removeAllTodos();
            return(
        
            <Redirect to={'/login'}/>
            );
        }else {  

                return(

            <div className='mainContainer'>
                <div>
                    <div className="page-content page-container" id="page-content">
                        <div className="padding">
                            <div className="row container d-flex justify-content-center">
                                <div className="col-lg-12">
                                    <div className="card px-3">
                                        <div className="card-body">
                                            <h4 className="card-title">Awesome Todo list</h4>
                                            <div className="add-items d-flex"><input type="text"
                                                                                     onChange={(event) => {
                                                                                         event.persist()
                                                                                         this.setState({
                                                                                             todo:event.target.value
                                                                                         })
                                                                                         
                                                                                     }}
                                                                                     className="form-control todo-list-input"
                                                                                     placeholder="What do you need to do today?"/>
                                                <button
                                                    onClick={this.addTodo}
                                                    className="add btn btn-primary font-weight-bold todo-list-add-btn">Add
                                                </button>

                                            </div>
                                            <div className="list-wrapper">
                                                <ul className="d-flex flex-column todo-list">
                                                    {this.props.todos.map((todo, index) => {
                                                        console.log(index)
                                                        return(
                                                          <TodoModel todoname={{todo:todo.todo,
                                                              key:index,
                                                              email:this.state.email,
                                                              removeTodo:this.props.removeTodo}}  />
                                                       )

                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );


        }


    }
}


export default User;