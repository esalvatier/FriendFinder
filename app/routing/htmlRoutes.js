var express = require("express");
var path = require("path");

function HTMLRoutes(serverApp) {
  this.default = function() {
    serverApp.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  }

  this.survey = function() {
    serverApp.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  }
}

module.exports = HTMLRoutes;