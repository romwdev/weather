var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "roman",
  database: "weather",
  password: "roman"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to mysql database!");
});

module.exports = db;