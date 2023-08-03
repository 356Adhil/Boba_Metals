const PostsData = require("../../models/postModel");

const getPosts = async (req, res) => {
  try {
    const postData = await PostsData.find();
    res.status(200).json(postData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = (req, res) => {
  res.send("Hello This is createPost Route");
};

module.exports = {
  getPosts,
  createPost,
};
