const Pedido = require('../models/pedido-model.js')

module.exports = class PedidoService {
    async list(){
        return await Pedido.find({})
    }
}