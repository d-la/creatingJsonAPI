let express = require('express'),
    router = express.Router();

// Require the helpers functions exported from the helpers/todo file
let helpers = require('../helpers/todo');

// Routes and handlers for root api route
router.route('/')
    .get(helpers.getToDos)
    .post(helpers.createToDo);

// Routes and handlers for HTTP requests that manipulate data
router.route('/:id')
    .get(helpers.getToDo)
    .put(helpers.updateToDo)
    .delete(helpers.deleteToDo);

module.exports = router;