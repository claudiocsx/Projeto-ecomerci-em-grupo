const { Router } = require('express')
const path = '/catalogo/:min/:max'
const catalogController = require('../controllers/catalogController')

const router = new Router()

module.exports = router.get(path, catalogController)