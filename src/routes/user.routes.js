const routes = require("express").Router();
const { createUser, userLogin } = require("../controller/user.controller");

routes.post("/register", createUser);
routes.post("/login", userLogin);

module.exports = routes;
