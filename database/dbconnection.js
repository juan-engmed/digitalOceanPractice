const Sequelize = require('sequelize');

const connection = new Sequelize('jfsambis', 'root', 'Light100!',{

    host: 'localhost',
    dialect: 'mysql'
    
});

module.exports = connection;