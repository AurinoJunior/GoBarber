const { User } = require("../models");

class AppointmentController {
  async index(req, res) {
    const provider = await User.findByPk(req.params.provider);

    return res.render("appointments/create", { provider });
  }
}

module.exports = new AppointmentController();
