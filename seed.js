const mongoose = require('mongoose');

const db = require('./models');

const todo_list = [
  {
    task: "task 1",
    description: "description of task 1"
  },
  {
    task: "task 2",
    description: "description of task 2"
  },
  {
    task: "task 3",
    description: "description of task 3"
  },
  {
    task: "task 4",
    description: "description of task 4"
  },
  {
    task: "task 5",
    description: "description of task 5"
  },
  {
    task: "task 6",
    description: "description of task 6"
  },
  {
    task: "task 7",
    description: "description of task 7"
  },
  {
    task: "task 8",
    description: "description of task 8"
  },
];

// remove all records that match {} -- which means remove ALL records
db.Todo.remove({}, function(err, todos){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all todos');

    // create new records based on the array todos_list
    db.Todo.create(todo_list, function(err, todos){
      if (err) { return console.log('err', err); }
      console.log("created", todos.length, "todos");
      process.exit();
    });
  }
});

