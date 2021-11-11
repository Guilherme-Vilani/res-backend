const Cliente = require('../models/cliente-model.js')

module.exports = class ClienteService {
    async list(){
        return await Cliente.find({})
    }
}