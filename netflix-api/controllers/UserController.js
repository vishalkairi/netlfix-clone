const User = require("../models/UserModel");

const addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      await User.create({ email, likedMovies: [data] });
      return res.status(201).json({ msg: "Movie added successfully" });
    }
    const { likedMovies } = user;
    const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
    if (!movieAlreadyLiked) {
      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        {
          likedMovies: [...user.likedMovies, data],
        },
        { new: true }
      );
      return res.status(200).json(updatedUser);
    } else return res.json({ msg: "movie already liked" });
  } catch (error) {
    console.log(error);
    return res.json({ msg: "Error adding movie" });
  }
};

const getAllMovies = async (req, res) => {
  console.log(`request received ${req.params.email}`);
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User does not exists" });
    }
    console.log(user);
    return res.status(200).json({ msg: "success", movies: user.likedMovies });
  } catch (error) {}
};

const removeFromLikedMovies = async (req, res) => {
  try {
    console.log(`Inside remove ${JSON.stringify(req.body)}`);
    const { movieId, email } = req.body;
    console.log(movieId);
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User does not exists" });
    const likedMovies = user.likedMovies;
    const newLikedMovies = likedMovies.filter(({ id }) => id !== movieId);
    console.log("new liked movies " + newLikedMovies);
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { likedMovies: newLikedMovies },
      { new: true }
    );
    console.log(updatedUser);
    return res
      .status(200)
      .json({ msg: "success", movies: updatedUser.likedMovies });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Could not update the list" });
  }
};

module.exports = { addToLikedMovies, getAllMovies, removeFromLikedMovies };
