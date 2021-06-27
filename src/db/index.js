const Sequelize = require('sequelize');
const config = require('config');

const instancia = new Sequelize(
    config.get('mysql.database'),
    config.get('mysql.user'),
    config.get('mysql.password'),
    {
        host:config.get('mysql.host'),
        port:config.get('mysql.port'),
        dialect:'mysql'
    }
    // 'agenda',
    // 'Bea',
    // 'Be@triz1',
    // {
        // host:'127.0.0.1',
        // dialect:'mysql'
    // }
);
module.exports = instancia;