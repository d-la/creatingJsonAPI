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
    // console.log(req.body);
    mongoDB.Todo.create(req.body)
    .then( (newToDo) => {
        res.json(newToDo);
    }).catch( (error) => {
        res.send(error);
    });
});

module.exports = router;