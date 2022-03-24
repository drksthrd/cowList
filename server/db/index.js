const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'helloworld',
  database: 'cowList'
});

connection.connect(err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Database connected');
  }
})

module.exports = connection;