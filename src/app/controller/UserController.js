const { User } = require("../models");

class UserController {
  async create(req, res) {
    const { filename } = req.file;

    await User.create({ ...req.body, avatar: filename });

    return res.redirect("/");
  }
}

module.exports = new UserController();
