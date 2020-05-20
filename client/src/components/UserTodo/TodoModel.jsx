import React from "react";
import './User.css';
import axios from 'axios';

export const TodoModel = (todoname) =>  {

return(
    <li className={'list-item'} key='1' onClick={() => {

    }}>
        <div className="d-flex todoItem">
            <button type="button" className="btn btn-success" onClick={ async (e)  => {

               todoname.todoname.removeTodo(todoname.todoname.todo);



                await axios.delete('http://localhost:8080/login/deleteTodo/'+todoname.todoname.email+'/' +todoname.todoname.todo, {
                    headers:{
                        'Content-type':'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods':'DELETE',
                        'Accept':'application/json, text/plain, */*'
                    }

                }).then((data) => {
                    console.log(1)
                })
                }
            }>Completed</button>
            <div>{todoname.todoname.todo}</div>
        </div>
    </li>
)





}

