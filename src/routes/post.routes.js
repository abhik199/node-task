const {
  createPost,
  updatePost,
  deletePost,
  fetchPost,
} = require("../controller/post.controller");

const router = require("express").Router();

router.post("/create_post", createPost);
router.get("/get_post/:id", fetchPost);
router.delete("/delete_post/:id", deletePost);
router.patch("/update_post/:id", updatePost);

module.exports = router;
