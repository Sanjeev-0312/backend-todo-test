import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import router from "./routes/todoRoutes.js";


dotenv.config();
const app = express();
app.use(express.json())
const  port  = 3000;

mongoose.connect(process.env.MONGO_URI, {
  dbName: "backend",
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/todos",router); 

app.get('/',(req, res) =>{
  res.send('welcome to the server')
})

app.listen(3000, () => 
  {
  console.log(`Server app listening on port ${port}`);
  })