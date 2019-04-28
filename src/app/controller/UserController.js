const { User } = require("../models");

class UserController {
  create(req, res) {
    return res.render("auth/signup");
  }

  async fetch(req, res) {
    await User.create(req, res);

    return res.redirect("/");
  }
}

module.exports = new UserController();
