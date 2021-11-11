const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        nome: {type: String, required:true},
        email: {type: String, required:true},
        idade: {type: Number, required:true},
        telefone: {type: String, required:true},
        senha: {type:  String, required: true}
    }
)

module.exports = mongoose.model('Cliente', schema);