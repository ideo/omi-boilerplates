var port = process.env.PORT || 5000
var express = require('express')
var app = express()
var env = process.env.ENV || 'development'

app.use(express.static(__dirname + '/dist'))

app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/index.html')
})

app.listen(port, function() {
	console.log(`App running at http://localhost:${port}`);
})