const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        valor: { type: Number, required: true },
        idEstabelecimento: { type: String, required: true },
        idCliente: { type: String, required: true }
    }
)

module.exports = mongoose.model('Pedido', schema);