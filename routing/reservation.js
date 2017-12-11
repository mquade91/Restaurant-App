module.exports = function() {
	var fs = require("fs");
	var apiRouter = new require("express").Router();
	var bodyParser = require("body-parser");

	var tables;

	apiRouter.get("/", function(request, response) {
		fs.readFile("./api/tables.js", "utf-8", function(error, result) {
			error && console.log(error);
			console.log(JSON.parse(result));
			response.end(result);
		});
	});

	var urlencodedParser = bodyParser.urlencoded({ extended: true });
	apiRouter.post("/", urlencodedParser, function(request, response) {
		if (!request.body) return response.sendStatus(400);
		console.log(request.body);

		fs.readFile("./data/tables.js", "utf-8", function(error, data) {
			error & console.log(error);
			tables = JSON.parse(data);
			if (tables.length >= 5) {
				//if more than 5 people - write to the waitlist file
				console.log("isFull");
				fs.writeFile("./data/waitList.js", JSON.stringify(tables), function(error) {
					if (error) {
						throw error;
					}
				});
				//send "Full" to the client side
				response.send("waitlist");
			}
			else {
				tables.push(request.body)
				fs.writeFile("./data/tables.js", JSON.stringify(tables), function(error) {
					if (error) {
						throw error;
					}
				});
				response.send("Welcome!");
			}

			console.log(tables);
		});
	})
	return apiRouter;
}();
