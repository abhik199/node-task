const routes = require("express").Router();

const userRoutes = require("./user.routes");
const postRoutes = require("./post.routes");
const commentRoutes = require("./comment.routes");

routes.use("/post", postRoutes);
routes.use("/user", userRoutes);
routes.use("/comment", commentRoutes);

module.exports = routes;
