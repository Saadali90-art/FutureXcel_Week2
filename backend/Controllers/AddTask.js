import userData from "../models/userData.js";

const addTask = async (req, res) => {
  try {
    const { task, description, date } = req.body;

    const newTask = {
      task,
      description,
      completed: false,
      date,
    };

    await userData.insertOne(newTask);

    res.status(201).json({
      success: true,
      message: "Task added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export default addTask;
