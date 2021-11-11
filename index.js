var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

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