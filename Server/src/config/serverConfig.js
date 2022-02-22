const cors = require('cors')

module.exports = (server, express) => {
    server.use(cors())
    server.use(express.json())
    server.use(express.urlencoded({ extends: true }))
}