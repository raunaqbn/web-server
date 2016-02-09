var middleware = {
	requireAuthentication: function (req,res,next){
		console.log('private path hit!');
		next();
	},
	logger: function (req, res, next){
		console.log('Request'+ new Date().toString()+' '+ req.method + ' '+ req.originalurl);
		next();
	}
};

module.exports = middleware;