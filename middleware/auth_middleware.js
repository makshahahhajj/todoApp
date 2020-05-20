const jwt = require('jsonwebtoken');
const config = require('config');
const secretKey = config.get('jsonWebTokenKey');
const Todo = require('../models/Todo');

const auth_middle = (req, res, next) =>{
    const dataFromrequest = req.body;
    const token = req.header('webToken');
    console.log(token);
    if (!token){
        res.status(401).send('Not authorized');
    }
    try{
        let user = jwt.verify(token ,secretKey);
        req.body = user;
        // res.send(req.body);
    }catch (e) {
        res.send('error');
    }

    next();
};
module.exports = auth_middle;