const Estabelecimento = require('../models/estabelecimento-model.js')

module.exports = class EstabelecimentoService {
    async list(){
        return await Estabelecimento.find({})
    }
}