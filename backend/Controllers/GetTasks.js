import userData from "../models/userData.js";

const getTasks = async (req, res) => {
  try {
    let data = await userData.find();

    res.status(200).json({
      message: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export default getTasks;
