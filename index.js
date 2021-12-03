require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

const mongoose = require('mongoose');

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Servidor Restaurante no ar!!!')
});

require('./src/routes/cardapio-routes')(app)
require('./src/routes/cliente-routes')(app)
require('./src/routes/estabelecimento-routes')(app)
require('./src/routes/pedido-routes')(app)

const server = app.listen(process.env.PORT || 3001, () => {
  console.log(`Servidor rodando... `)
});