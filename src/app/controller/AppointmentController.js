const { User, Appointment } = require("../models");

class AppointmentController {
  async index(req, res) {
    const provider = await User.findByPk(req.params.provider);

    return res.render("appointments/create", { provider });
  }

  async create(req, res) {
    const { id } = req.session.user;
    const { provider } = req.params;
    const { date } = req.body;

    try {
      await Appointment.create({
        userId: id,
        providerId: provider,
        date
      });
      req.flash("success", "Agendamento confirmado");
    } catch (error) {
      console.log(error);
      req.flash("error", "Não foi possivel agendar, tente novamente");
    }

    return res.redirect("/app/dashboard");
  }
}

module.exports = new AppointmentController();
