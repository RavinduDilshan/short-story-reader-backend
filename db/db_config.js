var mysql = require('mysql');

config = {
   host: 'localhost',
   user: 'root',
   password: 'password',
   database: 'short_story_reader'
}
var connection =mysql.createConnection(config); 
connection.connect(function(err){
  if (err){
    console.log('error connecting:' + err.stack);
  }
  console.log('connected successfully to DB.');
});

module.exports ={
     connection : mysql.createConnection(config) 
} 
