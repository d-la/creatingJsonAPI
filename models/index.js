let mongoose = require('mongoose');

// Set debug mode so we can see if actions fail and why
mongoose.set('debug', true);

mongoose.connect(process.env.MONGO_STRING);

mongoose.Promise = Promise;

module.exports.Todo = require('./todo')