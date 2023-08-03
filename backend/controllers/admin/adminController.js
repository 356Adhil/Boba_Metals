const PostsData = require("../../models/postModel");

const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostsData(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  createPost,
};
