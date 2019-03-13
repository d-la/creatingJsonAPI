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

// Create new to do route and handler
router.post('/', (req, res) => {
    mongoDB.Todo.create(req.body)
    .then( (newToDo) => {
        res.json(newToDo);
    }).catch( (error) => {
        res.send(error);
    });
});

// Get single to do route and handler
router.get('/:id', (req, res) => {
    // Look up a todo by ID and return the todo if found
    mongoDB.Todo.findById(req.params.id)
    .then( (requestedToDo) => {
        res.json(requestedToDo);
    }).catch( (error) => {
        res.send(error);
    });
});

// Update (PUT) single to do route and handler
router.put('/:id', (req, res) => {
    mongoDB.Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then( (toDo) => {
        res.send(toDo);
    }).catch( (error) => {
        res.send(error);
    });
});

// Delete single to do route and handler
router.delete('/:id', (req, res) => {
    mongoDB.Todo.remove({_id: req.params.id})
    .then( () => {
        res.json({delete: true});
    }).catch( (error) => {
        res.send(error);
    });
});

module.exports = router;