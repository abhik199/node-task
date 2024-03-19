const {
  createComment,
  updateComment,
  deleteComment,
  fetchComment,
} = require("../controller/comment.controller");

const router = require("express").Router();

router.post("/create_comment", createComment);
router.get("/get_comments", fetchComment);
router.delete("/delete_comment/:id", deleteComment);
router.patch("/edit_comment", updateComment);

module.exports = router;
