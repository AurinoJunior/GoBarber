const express = require("express");
const multerConfig = require("./config/multer"); //importando configuração do multer
const upload = require("multer")(multerConfig); // Criando instancia a partir da configuração

const routes = express.Router();

const UserController = require("./app/controller/UserController");
const SessionController = require("./app/controller/SessionController");
const DashboardController = require("./app/controller/DashboardController");
const FileController = require("./app/controller/FileController");
const AppointmentController = require("./app/controller/AppointmentController");

const authMiddleware = require("./app/middlewares/auth");
const guestMiddleware = require("./app/middlewares/guest");

// Middleware para capturar menssagens flash e enviar ao locals para poder usar nos templates
routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash("success");
  res.locals.flashError = req.flash("error");

  return next();
});

routes.get("/", guestMiddleware, (req, res) => {
  return res.render("auth/signin");
});

routes.get("/files/:file", FileController.show);

routes.get("/signup", guestMiddleware, UserController.index);
routes.post("/signup", upload.single("avatar"), UserController.create);

routes.post("/signin", SessionController.login);

// Protegendo todas as rotas que iniciam com /app so pode ser acessado se logado
routes.use("/app", authMiddleware);
routes.get("/app/logout", SessionController.destroy);
routes.get("/app/dashboard", DashboardController.index);

routes.get("/app/appointments/new/:provider", AppointmentController.index);

module.exports = routes;
