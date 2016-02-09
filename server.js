var express = require('express');
var app = express();

var middleware = {
	requireAuthentication: function (req,res,next){
		console.log('private path hit!');
		next();
	}
};

app.use(middleware.requireAuthentication);

app.get('/',function (req, res){
	res.send('Hello world!');
});

app.get('/about',function (req,res){
	res.send('this is Raunaq\'s local page!');
});

app.use(express.static(__dirname + '/public'));
app.listen(3000);