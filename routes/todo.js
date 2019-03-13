let express = require('express'),
    router = express.Router(),
    mongoDB = require('../models');

router.get('/', (req, res) => {
    mongoDB.Todo.find()
    .then( (todos) => {
        res.json(todos);
    }).catch( (error) => {
        res.send(error);
    });
});

router.post('/', (req, res) => {
    // Create a new todo item with mongoDB
    mongoDB.Todo.create(req.body)
    .then( (newToDo) => {
        res.json(newToDo);
    }).catch( (error) => {
        res.send(error);
    });
});

router.get('/:id', (req, res) => {
    // Look up a todo by ID and return the todo if found
    mongoDB.Todo.findById(req.params.id)
    .then( (requestedToDo) => {
        res.json(requestedToDo);
    }).catch( (error) => {
        res.send(error);
    });
});


router.put('/:id', (req, res) => {
    mongoDB.Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then( (toDo) => {
        res.send(toDo);
    }).catch( (error) => {
        res.send(error);
    });
});
module.exports = router;