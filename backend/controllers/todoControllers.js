import Todo from '../models/todoSchema.js';

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await Todo.create({ title });
    res.status(201).json({ message: 'Todo created successfully', todo });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create todo', error: error.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch todos', error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const todo = await Todo.findByIdAndUpdate(id, { title }, { new: true });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.status(200).json({ message: 'Todo updated successfully', todo });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update todo', error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete todo', error: error.message });
  }
};

export const completeTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, { completed: true }, { new: true });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.status(200).json({ message: 'Todo marked as completed', todo });
  } catch (error) {
    res.status(500).json({ message: 'Failed to complete todo', error: error.message });
  }
};
