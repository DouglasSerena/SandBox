const Sequelize = require('sequelize')

//Conexão com banco de dados Mysql
const sequelize = new Sequelize('postapp', 'root', '71592308', {
    host: "localhost",
    dialect: 'mysql'
})
sequelize.authenticate().then(function() {
    console.log("CONECTADO A O BANCO DE DADOS")
}).catch(function(erro){
    console.log("FALHA AO SE CONECTAR: "+erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}