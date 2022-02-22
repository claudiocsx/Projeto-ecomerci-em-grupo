/* IMPORTANDO ROTAS AQUI
const loginUsuario = require(...)
const loginAdmin = require(...)
...
*/

module.exports = server => {
    server.use('/', (req, res) => {
        return res
            .status(200)
            .json({
                status: 'ok',
                message: "rota de teste"
            })
    })
}