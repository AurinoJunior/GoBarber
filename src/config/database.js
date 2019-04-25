module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  operatorAliases: false,
  define: {
    timestamps: true
  }
}
