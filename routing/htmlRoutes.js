module.exports = function() {
	var fs = require("fs");
	var apiRouter = new require("express").Router();

	apiRouter.get("/?(index.html)?", function(request, response) {
		fs.readFile("./public/home.html", "utf-8", function(error, result) {
			error && console.log(error);
			console.log("home page requested");
			response.end(result);
		});
	});
	apiRouter.get("/reservation(.html)?", function(request, response) {
		fs.readFile("./public/reservation.html", "utf-8", function(error, result) {
			error && console.log(error);
			console.log("reservation page requested");
			response.end(result);
		});
	});
	apiRouter.get("/table(.html)?", function(request, response) {
		fs.readFile("./public/table", "utf-8", function(error, result) {
			error && console.log(error);
			console.log("table page requested");
			response.end(result);
		});
	});
	return apiRouter;
}();
