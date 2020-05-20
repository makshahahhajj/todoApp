const mongoose = require('mongoose');

let Todo = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    todo: {
        type:String,
        required:true
    }

});

module.exports = Todo = mongoose.model('todos', Todo);