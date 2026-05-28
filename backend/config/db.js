import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Food-Delivery:Shiva6203@cluster0.vlztes8.mongodb.net/food-del?appName=Cluster0"
    );
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Error:", error.message);
  }
};

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.