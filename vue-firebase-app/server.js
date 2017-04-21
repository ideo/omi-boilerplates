var port = process.env.PORT || 5000
var path = require('path');
var express = require('express')
var app = express()

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function(req,res){
	res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port, function() {
	console.log(`App running at http://localhost:${port}`);
})