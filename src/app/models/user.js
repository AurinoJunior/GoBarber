module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    providers: DataTypes.BOOLEAN
  })

  return User
}
