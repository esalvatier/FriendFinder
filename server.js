var express = require("express");
var path = require("path");
var HTMLRoutes = require("./app/routing/htmlRoutes.js");
var APIRoutes = require("./app/routing/apiRoutes.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var webRouting = new HTMLRoutes(app);

webRouting.survey();
webRouting.default();

var api = new APIRoutes(app);

api.getRoute();
api.postRoute();

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});