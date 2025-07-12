const mysql = require('mysql')
const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'petshop_db',
});
module.exports = conexao