var mysql      = require('mysql');

var connection = mysql.createConnection({
  port: 3306,
  host     : 'd4wg4nszud1ysuv7:qw7kivup9lxpbzdg@ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'd4wg4nszud1ysuv7',
  password : 'qw7kivup9lxpbzdg',
  database : 'gsw3abjc36mo6i91'
});
 
connection.connect();
 
connection.query('show * from PublisherDirectory;', function(err, rows, fields) {
  if (err) throw err;
 
  console.log(rows[0]);
});
 
connection.end();








// var Sequelize = require("sequelize");

// // Lists out connection options
// var source = {
//   port: 3306,
//   host     : 'd4wg4nszud1ysuv7:qw7kivup9lxpbzdg@ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//   user     : 'd4wg4nszud1ysuv7',
//   password : 'qw7kivup9lxpbzdg',
//   database : 'gsw3abjc36mo6i91'
// }

// // Selects a connection (can be changed quickly as needed)
// var selectedSource = source;

// // Creates mySQL connection using Sequelize
// var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
//   host: selectedSource.host,
//   dialect: 'mysql',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },
// });

// // Exports the connection for other files to use
// module.exports = sequelize;