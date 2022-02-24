// IMPORTANDO ROTAS AQUI
const catalogRoutes = require('./catalogRoutes')

module.exports = server => {
    server.use(
        catalogRoutes
    )
}