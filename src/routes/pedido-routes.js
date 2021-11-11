const express = require('express')
const router = express.Router()
const PedidoService = require('../service/pedido-service.js')
const pedidoService = new PedidoService()
const Pedido = require('../models/pedido-model')

router.get('/pedido/listar', async (req, res) => {
    let pedido = await pedidoService.list()
    res.json(pedido)
})

router.post('/pedido/registro', async (req, res) => {
    try {

        const { nome, valor, idEstabelecimento, idCliente } = req.body;

        const pedido = await Pedido.create({
            nome,
            valor,
            idEstabelecimento,
            idCliente
        });

        res.status(201).json(pedido);
    } catch (err) {
        console.log(err);
    }
})

router.get('/pedido/listar/:id', async (req, res) => {
    let pedido = await pedidoService.list()
    var teste = pedido.filter(element => element.idEstabelecimento == req.params.id);
    if (teste) {
        res.json(teste);
    } else {
        res.sendStatus(404)
    }
})

router.delete('/cliente/excluir/:id', async (req, res) => {
    Cliente
        .findByIdAndRemove(req.params.id).then(doc => {
            if (!doc) {
                return res.status(404).send();
            }
            res.send(doc);
        }).catch(err => {
            res.status(500).send(err);
        })
})

module.exports = (app) => app.use('/', router)