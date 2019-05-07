module.exports = (sequelize, DataType) => {
  const Appointment = sequelize.define("Appointment", {
    date: DataType.DATE
  });

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreignKey: "userId" });
    Appointment.belongsTo(models.User, { foreignKey: "providerId" });
  };

  return Appointment;
};
