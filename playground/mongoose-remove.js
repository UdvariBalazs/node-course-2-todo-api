const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5bea82d1ed4824c1f1b52bc4'}).then((todo) => {

// });

Todo.findByIdAndRemove('5bea82d1ed4824c1f1b52bc4').then((todo) => {
    console.log(todo);
});