var path = require("path");

// constructor for an object which contains the get and post routes for the API on the server, simply pass in an initialized express instance 
function HTMLRoutes(serverApp) {

  //default route, or root route
  this.default = function() {
    serverApp.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  }

  //route to survey
  this.survey = function() {
    serverApp.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  }
}

module.exports = HTMLRoutes;