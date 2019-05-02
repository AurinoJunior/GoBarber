const express = require("express");
const multerConfig = require("./config/multer"); //importando configuração do multer
const upload = require("multer")(multerConfig); // Criando instancia a partir da configuração

const routes = express.Router();

const UserController = require("./app/controller/UserController");
const SessionController = require("./app/controller/SessionController");

routes.get("/", (req, res) => {
  return res.render("auth/signin");
});

routes.get("/signup", (req, res) => {
  return res.render("auth/signup");
});

routes.post("/signin", SessionController.login);
routes.post("/signup", upload.single("avatar"), UserController.create);

routes.get("/app/dashboard", (req, res) => {
  res.render("dashboard");
});
module.exports = routes;
