import mongoose from "mongoose";

const connectDb = async (db_url) => {
  try {
    mongoose.connect(db_url);
    console.log("DataBase Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
