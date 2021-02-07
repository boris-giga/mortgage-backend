'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'us-cdbr-east-03.cleardb.com',
  user     : 'b87f1c5b2e3543',
  password : 'e74f5651',
  database : 'heroku_ff5f1383f7bc448'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;