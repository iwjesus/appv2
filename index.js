var express = require('express')
var app = express()
app.get('/v2', function (req, res) {
  res.send('Roteamento Funcionando!')
})
app.listen(5000, function () {
  console.log('app listening on port 5000!')
})
