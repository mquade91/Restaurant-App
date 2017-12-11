var app = new require("express")();

var apiRoutes = require("./routing/apiRoutes.js");
var htmlRoutes = require("./routing/htmlRoutes.js");
var reservationRoutes = require("./routing/reservation.js")

var path = require("path");

app.use("/api/", apiRoutes);
app.use("/?", htmlRoutes);
app.use("/reservation", reservationRoutes);


var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
	console.log("Main:" + PORT)
});
