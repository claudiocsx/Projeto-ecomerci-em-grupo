const ProductRepository = require('../repositories/ProductsRepository')

module.exports = (min, max) => {
    const products = ProductRepository.getAll()
    const catalog = []    

    // varrendo o array products e selecionando produtos de min a max
    for (let i=0; i<=max; i++) {
        if (i >= min && min < products.length && max <= products.length ) {
            catalog.push(products[i])
        }
    }

    return catalog
}