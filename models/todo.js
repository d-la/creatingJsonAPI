let mongoose = require('mongoose');

// The schema
let todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date, 
        default: Date.now
    }
});

// Create the model
let Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;