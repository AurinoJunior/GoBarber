const express = require("express");
const multerConfig = require("./config/multer"); //importando configuração do multer
const upload = require("multer")(multerConfig); // Criando instancia a partir da configuração

const routes = express.Router();

const UserController = require("./app/controller/UserController");
const SessionController = require("./app/controller/SessionController");
const authMiddleware = require('./app/middlewares/auth');
const guestMiddleware = require('./app/middlewares/guest');

routes.get("/", guestMiddleware, (req, res) => {
  return res.render("auth/signin");
});

routes.get("/signup", guestMiddleware, (req, res) => {
  return res.render("auth/signup");
});

routes.post("/signup", upload.single("avatar"), UserController.create);
routes.post("/signin", SessionController.login);

//Protegendo todas as rotas que iniciam com /app
routes.use('/app', authMiddleware);

routes.get("/app/dashboard", (req, res) => {
  console.log(req.session.user);
  res.render("dashboard");
});
module.exports = routes;
