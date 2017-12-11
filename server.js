var app = new require("express")();

var apiRoutes = require("./routing/apiRoutes.js");
var htmlRoutes = require("./routing/htmlRoutes.js");
var reservationRoutes = require("./routing/reservation.js")

var path = require("path");

app.use("/api/tables", apiRoutes);
app.use("/?", htmlRoutes);
app.use("/reservation", reservationRoutes);



app.listen(process.env.PORT || 8080, function() {
    console.log("Main:" + process.env.PORT)
});
