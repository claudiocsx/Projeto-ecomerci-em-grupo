const express = require('express')
const server = express()

// configurando server
require('./config/serverConfig')(server, express)

// iniciando rotas
require('./routes')(server)

module.exports = server