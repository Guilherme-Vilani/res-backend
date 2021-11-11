const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        razaoSocial: { type: String, required: true },
        cnpj: { type: String, required: true },
        nomeFantasia: { type: String, required: true },
        telefone: { type: String, required: true },
        email: { type: String, required: true },
        senha: { type: String, required: true },
        cardapio: [],
        image: { type: String, required: true }
    }
)

module.exports = mongoose.model('Estabelecimento', schema);