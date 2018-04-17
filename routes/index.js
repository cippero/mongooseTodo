const express    = require('express');
const indexRoute = express.Router();
// const mongoose   = require('mongoose');
const db         = require('../models');

indexRoute.get('/', function(req, res) {
  res.render('../views/index', {title: "Todo List"});
});

// get api list of todos
indexRoute.get('/api/todo', function (req, res) {
  // send all books as JSON response
  db.Todo.find(function(err, todo){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(todo);
  });
});

// // create new todo
// app.post('/api/todo', function (req, res) {
//   // create new todo with form data (`req.body`)
//   var newTodo = new Todo(req.body);

//   // save new todo in db
//   newTodo.save(function (err, savedTodo) {
//     res.json(savedTodo);
//   });
// });


indexRoute.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});

module.exports = indexRoute;