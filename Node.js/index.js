const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

// Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Conexão com banco de dados Mysql
        const Sequelize = require('sequelize')
        const sequelize = new Sequelize('sistemaDeCadastro', 'root', '71592308', {
            host: "localhost",
            dialect: 'mysql'
        })
//Rotas

    app.get('/', function(req, res){
        res.render('formulario')
    })

    app.post('/add', function(req, res) {
        res.send('formulario ok')
    })

app.listen('8081', function() {
    console.log('Servidor rodando')
})