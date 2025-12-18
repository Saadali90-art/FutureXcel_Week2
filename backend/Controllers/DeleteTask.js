import userData from "../models/userData.js";

const deleteTask = async (req, res) => {
  try {
    const data = req.body; // get task ID from request body

    if (!data || !data._id) {
      return res.status(400).json({ message: "Task ID is required" });
    }

    // Correct: deleteOne requires a filter object
    const deletedTask = await userData.deleteOne({ _id: data._id });

    res.status(200).json({
      message: "Task deleted successfully",
      task: deletedTask,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export default deleteTask;
