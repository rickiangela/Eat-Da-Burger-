var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {

	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'rae212325',
		database: 'burgers_db'
	})
};

connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL with ID: ' + connection.threadId + '\n\n');
});

module.exports = connection;