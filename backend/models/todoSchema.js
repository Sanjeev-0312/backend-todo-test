import mongoose, { model } from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Todo = model("todo", todoSchema);

export default Todo;