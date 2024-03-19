const commentModels = require("../models/comment.models");

exports.createComment = async (req, res, next) => {
  const { content, author, post } = req.body;

  try {
    const comment = await commentModels.create({
      content,
      author,
      post,
    });
    if (!comment) {
      return res.status(404).json({ message: "Comment not created" });
    }
    return res.json({
      message: "Comment created successfully",
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateComment = async (req, res, next) => {
  try {
    const commentId = req.params.commentId;
    const { content } = req.body;

    const updatedComment = await CommitModel.findByIdAndUpdate(
      commentId,
      { content },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    return res.json({
      message: "Comment updated successfully",
      success: false,
    });
  } catch (error) {
    return next(error);
  }
};
exports.deleteComment = async (req, res, next) => {
  try {
    const commentId = req.params.commentId;
    const deletedComment = await CommitModel.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res
        .status(404)
        .json({ message: "Comment not found", success: false });
    }
    res.json({ message: "Comment deleted", success: true });
  } catch (error) {
    return next(error);
  }
};

exports.fetchComment = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const comments = await CommitModel.find({ post: postId }).populate(
      "author"
    );
    if (!comments) {
      return res
        .status(404)
        .json({ message: "Comments not found", success: false });
    }
    return res.json({
      message: "Comments fetched successfully",
      success: true,
      comments,
    });
  } catch (error) {
    return next(error);
  }
};
