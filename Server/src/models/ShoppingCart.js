const { Schema, model } = require('./db/connectionDB');

// Criando sub schema de products
const productsSchema = new Schema({
    id_product: Schema.Types.ObjectId,
    quantity: Number
});

// Criando schema de ShoppingCarts
const shoppingCartsSchema = new Schema({
    id_user: Schema.Types.ObjectId,
    products: [productsSchema],
    
}, {
    timestamps: true,
    bufferCommands: false
});

// Criando Modelo ShoppingCart
const ShoppingCart = model('ShoppingCarts', shoppingCartsSchema);

module.exports = ShoppingCart;