const Post = require("../models/post.models");

exports.createPost = async (req, res, next) => {
  try {
    const { title, content, author } = req.body;
    const createPost = await Post.create({
      title,
      content,
      author,
    });
    if (!createPost) {
      return res.status(404).json({ message: "Post not created" });
    }
    return res.json({
      message: "Post created successfully",
      success: true,
      data: createPost,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(updatedPost);
  } catch (error) {
    return next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted" });
  } catch (error) {
    return next(error);
  }
};

exports.fetchPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId)
      .populate("author")
      .populate("comments");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    return next(error);
  }
};
