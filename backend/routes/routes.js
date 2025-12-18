import express from "express";
import addTask from "../Controllers/AddTask.js";
import getTasks from "../Controllers/GetTasks.js";
import updateTasks from "../Controllers/UpdateTasks.js";
import deleteTask from "../Controllers/DeleteTask.js";

let router = express.Router();

router.post("/addtask", addTask);

router.get("/gettasks", getTasks);

router.post("/updatetasks", updateTasks);

router.delete("/deletetask", deleteTask);

export default router;
