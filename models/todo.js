const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    limitDate: {
        type: Date,
    },
    done: {
        type: Boolean,
        default: false
    }
});

module.exports = Todo = mongoose.model('todo', TodoSchema);