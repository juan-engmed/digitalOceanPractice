const Sequelize = require('sequelize');

const connection = require('./dbconnection');

//CRIANDO TABELA

const Msg = connection.define('msgs', {

    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    msg: {
         type: Sequelize.STRING,
         allowNull: false
    }
});

Msg.sync({force: false}).then(()=>{});

module.exports = Msg;