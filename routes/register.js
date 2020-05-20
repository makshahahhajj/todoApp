const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const users = require('../models/User');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const secretKey = config.get('jsonWebTokenKey');
const cookieParser = require('cookie-parser');


router.post('/',[
    check('name').isLength({ min: 5 }),
    check('email').isEmail(),
    check('password').isLength({ min: 8 })
                     .matches(/.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/)

] ,function (request, response) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
   const isvalid = validationResult(request);
    users.findOne({email:request.body.email}, function (err , user ) {
            if(!user) {
                if (!isvalid.isEmpty()){
                    response.send('invalid data');
                }
                else{
                    try {
                        let salt = bcrypt.genSaltSync(10);

                        let hashPassword = bcrypt.hashSync(request.body.password, salt);
                        //generate web token
                        const userToken = jwt.sign({
                            name:request.body.name,
                            password:request.body.password,
                            email:request.body.email
                        }, secretKey);
                        //response.cookie('user', user);
                        users.insertMany({"name": request.body.name, "email" : request.body.email, "password":hashPassword});
                        //users.remove({})
                        response.json(userToken);

                    } catch (error) {
                        console.log(error);
                    }
                }
            }else {

            }



});

  
});



module.exports = router;
