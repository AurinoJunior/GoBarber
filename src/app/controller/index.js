const UserController = require("./UserController");
const SessionController = require("./SessionController");
const DashboardController = require("./DashboardController");
const FileController = require("./FileController");
const AppointmentController = require("./AppointmentController");
const AvailableController = require("./AvailableController");

module.exports = {
  UserController: new UserController(),
  SessionController: new SessionController(),
  DashboardController: new DashboardController(),
  FileController: new FileController(),
  AppointmentController: new AppointmentController(),
  AvailableController: new AvailableController()
};
