const express = require("express");
const routes = express.Router();

const UserController = require("./app/controller/UserController");

routes.get("/signup", UserController.create);
routes.post("/signup", UserController.fetch);

module.exports = routes;
