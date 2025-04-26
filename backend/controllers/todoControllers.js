import Todo from '../models/todoSchema.js';

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await Todo.create({ title });
    res.json({ message: 'Todo created successfully', todo });
  } catch (error) {
    res.json({ message: 'Failed to create todo', error: error.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: 'Failed to fetch todos', error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const todo = await Todo.findByIdAndUpdate(id, { title }, { new: true });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo updated successfully', todo });
  } catch (error) {
    res.json({ message: 'Failed to update todo', error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.json({ message: 'Failed to delete todo', error: error.message });
  }
};

export const completeTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, { completed: true }, { new: true });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo marked as completed', todo });
  } catch (error) {
    res.json({ message: 'Failed to complete todo', error: error.message });
  }
};
