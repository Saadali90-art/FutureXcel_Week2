import userData from "../models/userData.js";

const updateTasks = async (req, res) => {
  try {
    const data = req.body; // get task ID from request body

    if (!data) {
      return res.status(400).json({ message: "Task ID is required" });
    }

    // Find the task by _id and update completed to true

    let info = await userData.updateOne(
      { _id: data._id },
      { $set: { completed: true } }
    );

    res.status(200).json({
      message: "Task marked as completed",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

export default updateTasks;
