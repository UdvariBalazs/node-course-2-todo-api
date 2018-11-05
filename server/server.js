var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
       res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/1234324
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    // Valid id is using isValid
    if (!ObjectID.isValid(id)) {
        // 404 - send back empty send
        return res.status(404).send();
    }

    // findById
    Todo.findById(id).then((todo) => {
    // success
        if (!todo) {
            res.status(404 ).send();
        }
        else {
            res.send({todo});
            console.log('Unable to fin todo')
        }

    // error
    }).catch((e) => {
        // 400 - and send empty body back
        res.status(400).send();
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};