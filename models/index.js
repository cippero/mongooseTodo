const mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/todo-app-demo');

module.exports.Todo = require("./todo.js");