const { Schema, model } = require('./db/connectionDB');

// Criando schema de Product
const productSchema = new Schema({
    name: String,
    price: Number,
    in_inventory: Number,
    brand: String,
    path_image: String,
    category: [String],
    colors: [String]
}, {
    timestamps: true,
    bufferCommands: false
});

// Criando Modelo Product
const Product = model('Products', productSchema);

module.exports = Product;