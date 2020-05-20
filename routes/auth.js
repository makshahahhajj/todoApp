
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const Todo = require('../models/Todo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const secretKey = config.get('jsonWebTokenKey');


router.get('/user', require('../middleware/auth_middleware'), function (request, response) {
    let email = request.body.email;
    let password = request.body.password;

response.send(email)


});

router.post('/todo', function (request, response) {
    let email = request.body.email;
    let password = request.body.password;

    Todo.find({email:email},function (err , todo ) {
        response.send(todo);
    })


});

router.delete('/deleteTodo' + '/:email'+ '/:todo', function (request, response) {
    let email = request.params.email;
    let todo = request.params.todo;

    Todo.remove({email:email,todo:todo },function (err , todo ) {
        response.send('deleted');
    })


});

router.post('/addTodo', function (request, response) {
    let email = request.body.email;
    let todo = request.body.todo;

    Todo.insertMany({email:email , todo:todo},function (err , todo ) {
        response.send(todo);
    })


});
router.post('/', function (request, response) {
    let email = request.body.email;
    let password = request.body.password;

    User.findOne({email:email}, function (err , user ){

        try{
            let result = bcrypt.compareSync(password, user.password);
            if(result){
                let userToken = jwt.sign({
                    name:user.name,
                    password:user.password,
                    email:user.email
                }, secretKey);

                response.json(userToken);
            }else{
                response.send("Пароль неверный");
            }
        }
        catch(e){
            response.send("Email не найден");
        }

    })

})

module.exports = router;
