const express = require('express');
const router = express.Router();

const {
    allTodos,
    createTodo,
    editTodo,
    deleteTodo
} = require ('../controllers/userControllers')


router.get('/toDos', allTodos)

router.post('/toDos', createTodo)

router.patch('/toDos/:id', editTodo)

router.delete('/toDos/:id', deleteTodo)

module.exports = router;