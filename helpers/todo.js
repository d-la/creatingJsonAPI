let mongoDB = require('../models');

// Handle getting all to dos
exports.getToDos = (req, res) => {
    mongoDB.Todo.find()
    .then( (todos) => {
        res.json(todos);
    }).catch( (error) => {
        res.send(error);
    });
};

// Handle creating a to do item
exports.createToDo = (req, res) => {
    mongoDB.Todo.create(req.body)
    .then( (newToDo) => {
        res.json(newToDo);
    }).catch( (error) => {
        res.send(error);
    });
};

// Handle retrieving a single to do item
exports.getToDo = (req, res) => {
    mongoDB.Todo.findById(req.params.id)
    .then( (requestedToDo) => {
        res.json(requestedToDo);
    }).catch( (error) => {
        res.send(error);
    });
};

// Handle updating a single to do item
exports.updateToDo = (req, res) => {
    mongoDB.Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then( (toDo) => {
        res.send(toDo);
    }).catch( (error) => {
        res.send(error);
    });
};

// Handle deleting a single to do item
exports.deleteToDo = (req, res) => {
    mongoDB.Todo.remove({_id: req.params.id})
    .then( () => {
        res.json({delete: true});
    }).catch( (error) => {
        res.send(error);
    });
};

module.exports = exports;