const express = require('express')
const router = express.Router()
const ClienteService = require('../service/cliente-service.js')
const clienteService = new ClienteService()
const Cliente = require('../models/cliente-model')
const bcrypt = require('bcrypt');

router.get('/cliente/listar', async (req, res) => {
    let cliente = await clienteService.list()
    res.json(cliente)
})

router.post('/cliente/registro', async (req, res) => {
    try {

        const { nome, email, idade, telefone, senha } = req.body;

        const cliente = await Cliente.create({
            nome,
            email,
            idade,
            telefone,
            senha
        });

        res.status(201).json(cliente);
    } catch (err) {
        console.log(err);
    }
})

router.post("/cliente/login", async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!(email && senha)) {
            res.status(400).send("Usuário não encontrado, verifique o apelido e a senha.");
        }

        const cliente = await Cliente.findOne({ email });

        if (cliente != "" && cliente != null) {
            res.status(200).json(cliente);
        } else {
            res.status(400).send("Usuário não encontrado, verifique o apelido e a senha.");
        }

    } catch (err) {
        console.log(err);
    }
});

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