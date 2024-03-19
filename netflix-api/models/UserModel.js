const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  likedMovies: {
    type: Array,
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
