const express = require('express')
const router = express.Router()
const EstabelecimentoService = require('../service/estabelecimento-service.js')
const estabelecimentoService = new EstabelecimentoService()
const Estabelecimento = require('../models/estabelecimento-model')

router.get('/estabelecimento/listar', async (req, res) => {
    let estabelecimento = await estabelecimentoService.list()
    res.json(estabelecimento)
})

router.post('/estabelecimento/registro', async (req, res) => {
    try {
        const { razaoSocial, cnpj, nomeFantasia, telefone, email, senha, cardapio, image } = req.body;

        const estabelecimento = await Estabelecimento.create({
            razaoSocial, cnpj, nomeFantasia, telefone, email, senha, cardapio, image
        });

        res.status(201).json(estabelecimento);
    } catch (err) {
        console.log(err);
    }
})

router.post("/estabelecimento/login", async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!(email && senha)) {
            res.status(400).send("Usuário não encontrado, verifique o apelido e a senha.");
        }

        const estabelecimento = await Estabelecimento.findOne({ email });

        if (estabelecimento != "" && estabelecimento != null) {
            res.status(200).json(estabelecimento);
        } else {
            res.status(400).send("Usuário não encontrado, verifique o apelido e a senha.");
        }

    } catch (err) {
        console.log(err);
    }
});

router.get('/estabelecimento/listar/:id', async (req, res) => {
    let estabelecimento = await estabelecimentoService.list()
    var teste = estabelecimento.find(element => element._id == req.params.id);
    if (teste) {
        res.json(teste);
    } else {
        res.sendStatus(404)
    }

})


router.delete('/estabelecimento/excluir/:id', async (req, res) => {
    Estabelecimento
        .findByIdAndRemove(req.params.id).then(doc => {
            if (!doc) {
                return res.status(404).send();
            }
            res.send(doc);
        }).catch(err => {
            res.status(500).send(err);
        })

})

// router.delete('/cliente/excluir/:id', async (req, res) => {
//     Cliente
//         .findByIdAndRemove(req.params.id).then(doc => {
//             if (!doc) {
//                 return res.status(404).send();
//             }
//             res.send(doc);
//         }).catch(err => {
//             res.status(500).send(err);
//         })
// })

module.exports = (app) => app.use('/', router)