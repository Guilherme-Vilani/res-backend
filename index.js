var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var mongoose = require('mongoose')
var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

mongoose.connect('mongodb://admin:159263gui@clusterrestaurante-shard-00-00.ydy7y.mongodb.net:27017,clusterrestaurante-shard-00-01.ydy7y.mongodb.net:27017,clusterrestaurante-shard-00-02.ydy7y.mongodb.net:27017/Restaurante?authSource=admin&replicaSet=atlas-5pzkbb-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true');

app.get('/', (req, res) => {
  res.send('Servidor Restaurante no ar !!!')
});

require('./src/routes/cardapio-routes')(app)
require('./src/routes/cliente-routes')(app)
require('./src/routes/estabelecimento-routes')(app)
require('./src/routes/pedido-routes')(app)

const server = app.listen(process.env.PORT || 3001, () => {
  console.log(`Servidor rodando... `)
});