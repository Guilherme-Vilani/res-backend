const Cardapio = require('../models/cardapio-model.js')

module.exports = class CardapioService {
    async list(){
        return await Cardapio.find({})
    }
}