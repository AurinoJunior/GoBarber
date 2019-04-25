const server = require('./server')

const port = process.env.APPLICATION_PORT || 3000

server.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
