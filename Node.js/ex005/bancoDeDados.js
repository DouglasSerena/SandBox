const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemaDeCadastro', 'root', '71592308', {
    host: "localhost",
    dialect: 'mysql'
})
/*
const postagem = sequelize.define('usuarios', {
    titulo: {
        type: Sequelize.STRING
    },
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    },
})
*/
postagem.create({
    titulo: 'um titulo qualquer',
    name: 'Douglas',
    sobrenome: 'Serena'
})

sequelize.authenticate().then(function() {
    console.log('conectado com sucesso!')
}).catch(function(erro) {
    console.log('falha ao se conectar'+erro)
})
