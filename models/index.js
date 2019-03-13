let mongoose = require('mongoose');

// Set debug mode so we can see if actions fail and why
mongoose.set('debug', true);

mongoose.connect('mongodb+srv://dla:PoQw1491@dla-mongo-cluster-tvhlq.mongodb.net/test?retryWrites=true');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo')