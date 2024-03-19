const express = require("express");
const {
  addToLikedMovies,
  getAllMovies,
  removeFromLikedMovies,
} = require("../controllers/UserController");
const userRouter = express.Router();

userRouter.post("/add", addToLikedMovies);
userRouter.get("/liked:email", getAllMovies);
userRouter.put("/remove", removeFromLikedMovies);

module.exports = userRouter;
