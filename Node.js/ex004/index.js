const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/clas.html')
})

app.listen('8081', function() {
    console.log('Servidor rodando')
})