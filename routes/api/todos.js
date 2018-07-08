const express = require('express');
const router = express.Router();

// Todo Model
const Todo = require('../../models/Todo');

// @route GET api/todos
// @desc Get All todos
// @access Public
router.get('/', (req, res) => {
    Todo.find()
        .sort({limitDate: -1})
        .then(todos => res.json(todos));

});

// @route POST api/todos
// @desc Create a Todo
// @access Public
router.post('/', (req, res) => {
    const newTodo = new Todo({
        title: req.body.title,
        content: req.body.content,
        limitDate : req.body.limitDate
    });

    newTodo.save()
        .then(todo => res.json(todo));
});

// @route DELETE api/todos/:id
// @desc Delete a Todo
// @access Public
router.delete('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => todo.remove())
        .then(() => res.json({
            todo: todo,
            success: true
        }))
        .catch(err => res.status(404).json({success: false}))
});

// @route DELETE api/todos/:id
// @desc Delete a Todo
// @access Public
router.post('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => todo.update({
            done: true
        }))
        .then(() => res.json({
            todo: todo,
            success: true
        }))
        .catch(err => res.status(404).json({success: false}))
});

module.exports = router