const { User } = require("../models");

class SessionController {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.checkPassword(password))) {
      req.flash("error", "Usuario ou senha incorretos");
      return res.redirect("/");
    }

    // Definindo uma session com as informações do usuario
    req.session.user = user;
    return res.redirect("/app/dashboard");
  }

  destroy(req, res) {
    req.session.destroy(() => {
      res.clearCookie("root");
      return res.redirect("/");
    });
  }
}

module.exports = SessionController;
