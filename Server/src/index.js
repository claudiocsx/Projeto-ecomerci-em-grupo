const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, ".env.dev")
})

const server = require('./server')
const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})