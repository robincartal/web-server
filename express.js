var express = require('express')
var app = express()
var port = 3000;

var middleware = require("./middleware.js");

app.use(middleware.requireAuthentication);
app.use(middleware.logger);
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/about', function (req, res) {
  res.send('About us!')
})

app.use( express.static(__dirname + "/public") );
console.log(__dirname);
 
app.listen(port, function() {
	console.log( "Server started on port " + port + "!" )
})