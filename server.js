var express = require('express');
var app = express();
var PORT = process.env.port || 3000;
var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/',function (req, res){
	res.send('Hello world!');
});

app.get('/about',function (req,res){
	res.send('this is Raunaq\'s local page!');
});

app.use(express.static(__dirname + '/public'));
app.listen(PORT, function (){
	console.log('Express js server started on port ' + PORT);
});