const mysql = require('mysql');

const config = {
  host: 'mysql',
  user: 'root',
  password: 'admin',
  database: 'db_fullcycle',
};
const connection = mysql.createConnection(config);

module.exports = { connection };