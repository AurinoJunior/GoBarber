const express = require("express");
const routes = express.Router();

const UserController = require("./app/controller/UserController");

routes.get("/signup", UserController.create);

module.exports = routes;
