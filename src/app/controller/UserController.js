const { User } = require("../models");

class UserController {
  async index(req, res) {
    res.render("auth/signup");
  }

  async create(req, res) {
    const { filename } = req.file;

    try {
      await User.create({ ...req.body, avatar: filename });
      req.flash("success", "Conta criado com succeso!");
    } catch (error) {
      console.log(error);
      req.flash("error", "Não foi possivel criar sua conta, tente novamente!");
    }

    return res.redirect("/");
  }
}

module.exports = new UserController();
