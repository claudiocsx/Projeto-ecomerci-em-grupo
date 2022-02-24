const catalogService = require('../services/catalogoService')

module.exports = (req, res, next) => {
    const { min } = req.params
    const { max } = req.params
    const products = catalogService(min, max)   
    return res
        .status(200)
        .json(products)
}