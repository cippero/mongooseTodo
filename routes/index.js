const express    = require('express');
const indexRoute = express.Router();
const db         = require('../models');

indexRoute.get('/', function(req, res) {
  res.render('../views/index');
});

// get api list of todos
indexRoute.get('/api/todo', function (req, res) {
  // send all todos as JSON response
  db.Todo.find(function(err, todos){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(todos);
  });
});


indexRoute.get('/api/todo/:id', function (req, res) {
  // find one movie by its id
  db.Todo.find(function(err, todos){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    // find one movie by its id
    console.log('todo #' + req.params);
    res.json(todos[req.params.id-1]);
  });
  // Todo.findOne({ _id: todoId }, function (err, foundTodo) {
  //   res.json(foundTodo);
  // });
});


// // post new todo
// indexRoute.post('/api/todo', function (req, res) {
//   let newTask = db.Todo({task: req.body.task, description: req.body.description});
//   newTask.save();
//   res.json(newTask);
// });

// create new todo or update existing
indexRoute.post('/api/todo', function (req, res) {
  let newTask = req.body;
  db.Todo.findOneAndUpdate({ $or: [ {task: newTask.task}, {description: newTask.description} ]}, newTask, {upsert: true}, function(err, todos) {
    res.json(todos);
  });
});


// delete todo
indexRoute.delete('/api/todo/:id', function (req, res) {
  db.Todo.findOneAndRemove({_id: req.params.id}, function(err, todos) {
    res.json(todos);
  });
});


indexRoute.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});

module.exports = indexRoute;