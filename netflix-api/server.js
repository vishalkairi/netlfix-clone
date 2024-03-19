const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/netflix");
    console.log(`DB connected`);
  } catch (error) {
    console.log(error);
  }
};

const start = async () => {
  try {
    await connectDB();
    app.listen(4000, console.log(`server started`));
  } catch (error) {
    console.log(error);
  }
};

start();
