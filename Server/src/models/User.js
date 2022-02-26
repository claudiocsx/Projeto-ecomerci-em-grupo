const { Schema, model } = require('./db/connectionDB');

// Criando schema de Users
const userSchema = new Schema({
    name: String,
    cpf: String,
    email: String,
    password: String
}, {
    timestamps: true,
    bufferCommands: false
});

// Criando Modelo Users
const User = model('Users', userSchema);

module.exports = User;