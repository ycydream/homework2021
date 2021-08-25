
const mysql = require('mysql');
const config = require('./config');

var pool = mysql.createPool({
  host     : config.mysql.host,
  user     : config.mysql.username,
  password : config.mysql.password,
  database : config.mysql.database
});
 
class TestMySQL {
  constructor () {

  }
  test () {
    return new Promise((resolve, reject) => {
      pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        resolve('test MySQL : 1+1=' + results[0].solution)
      });      
    })
  }
}

module.exports = new TestMySQL()
