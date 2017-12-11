module.exports = function(){
	var fs = require("fs");
	var apiRouter = new require("express").Router();
	var bodyParser = require("body-parser");

	var tables;
	apiRouter.get("/tables", function(request, response){
		fs.readFile("./data/tables.js", "utf-8", function(error, result){
			error && console.log(error);	
			console.log(JSON.parse(result));
			response.end(result);
		});
	});
	apiRouter.get("/waitlist", function(request, response){
		fs.readFile("./data/waitlist.js", "utf-8", function(error, result){
			error && console.log(error);	
			console.log(JSON.parse(result));
			response.end(result);
		});
	});
	return apiRouter;
}();



