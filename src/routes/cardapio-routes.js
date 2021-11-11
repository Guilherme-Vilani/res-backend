const express = require('express')
const router = express.Router()
const CardapioService = require('../service/cardapio-service.js')
const cardapioService = new CardapioService()
const Cardapio = require('../models/cardapio-model')

router.get('/cardapio/listar', async (req, res) => {
    let cardapio = await cardapioService.list()
    res.json(cardapio)
})

router.post('/cardapio/registro', async (req, res) => {
    try {

        const { nomePrato, descricaoPrato, valorPrato, fotoPratoB64 } = req.body;

        const cardapio = await Cardapio.create({
            nomePrato,
            descricaoPrato,
            valorPrato,
            fotoPratoB64
        });

        res.status(201).json(cardapio);
    } catch (err) {
        console.log(err);
    }
})

router.delete('/cardapio/excluir/:id', async (req, res) => {
    Cardapio
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