module.exports = class ProductRepository {
    
    // private var -> type: Object
    static Model = require('../models/Product');

    /* Buscar todos os produtos
        -> return: @products: Array/Objects
    */
    static async getAll() {
        const products = await ProductRepository.Model.find();
        if (products.length === 0) throw new Error('Não ha produtos no banco de dados');
        return products;
    };


    /* Buscar todos os produtos que seguem as especificações em @params
        -> params: @where: Object
        -> return: @products: Array/Objects
    */
    static async getAllWhere(where) {
        const products = await ProductRepository.Model.find(where);
        if (products.length === 0) throw new Error('Não ha produtos no banco de dados');
        return products;
    };


    /* Buscar produto que possua id === @product_id
        -> params: @product_id: String/ObjectID
        -> return: @product: Object
    */
    static async getOne(product_id) {
        if (!product_id) throw new Error('Id invalido');
        const product = await ProductRepository.Model.findById(product_id);
        if (!product) throw new Error('Produto não encontrado');
        return product;
    };


    /* Buscar produto que siga as especificações em @params
        -> params: @where: Object
        -> return: @product: Object
    */
    static async getOneWhere(where) {
        const product = await ProductRepository.Model.findOne(where);
        if (!product) throw new Error('Produto não encontrado');
        return product;
   };
};