const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        nomePrato: {type: String, required:true},
        descricaoPrato: {type: String, required:true},
        valorPrato: {type: Number, required:true},
        fotoPratoB64: {type: String},
    }
)

module.exports = mongoose.model('Cardapio', schema);