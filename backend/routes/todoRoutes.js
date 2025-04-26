import express from 'express';
import { createTodo, getTodos, updateTodo, deleteTodo, completeTodo } from '../controllers/todoControllers.js';

const router = express.Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id/complete', completeTodo);

export default router;
