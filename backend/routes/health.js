import userData from "../models/userData.js";

const health = async (req, res) => {
  try {
    // Getting the data from database

    let data = await userData.find({});
    res.status(200).json({ message: data });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};

export default health;
