
var express = require('express')
var cors = require('cors')
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'data_form'
});

var app = express()
app.use(cors())
app.use(express.json())

connection.connect((err) => {
  if (err) {
      // throw err;
      console.error("error connecting: "  + err.stack);
  
  } else {
      console.log("Connected to database");
  }
  });
  

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})

app.get('/api/result_receive', function (req, res, next) {
    connection.query(
      'SELECT * FROM `result_receive`',
      function(err, results, fields) {
        res.json(results);
      }
    );
  })

  app.get('/list-paper', function (req, res, next) {
    connection.query(
      'SELECT * FROM `papers_receive`',
      function(err, results, fields) {
        res.json(results);
      }
    );
  })
  
  app.get('/api/address', function (req, res, next) {
    connection.query(
      'SELECT * FROM `address`',
      function(err, results, fields) {
        res.json(results);
      }
    );
  })

  app.get('/api/station', function (req, res, next) {
    connection.query(
      'SELECT * FROM `p_station`',
      function(err, results, fields) {
        res.json(results);
      }
    );
  })

  app.get('/api/orderlist', function (req, res, next) {
    connection.query(
      'SELECT * FROM `order`',
      function(err, results, fields) {
        res.json(results);
      }
    );
  })
 
  global.connection = connection;