const express = require('express');
const bodyparser = require('body-parser');
const register = require('./routes/register');
const auth = require('./routes/auth');
const connectDb = require('./config/database');
const cors = require('cors');

const server = express();
connectDb();
server.use(bodyparser.json());
server.listen(8080, function(){
    console.log("server is working!");
});

server.use('/register',cors(),register);
server.use('/login',cors(),auth);
server.use(cors());
server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    next();
})