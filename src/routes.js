const express = require("express");
const multerConfig = require("./config/multer"); //importando configuração do multer
const upload = require("multer")(multerConfig); // Criando instancia a partir da configuração

const routes = express.Router();

const UserController = require("./app/controller/UserController");

routes.get("/signup", (req, res) => {
  return res.render("auth/signup");
});

routes.post("/signup", upload.single("avatar"), UserController.create);

module.exports = routes;
