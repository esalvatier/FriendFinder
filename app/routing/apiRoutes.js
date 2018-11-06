var express = require("express");
var path = require("path");
var data = require("../data/friends.js");

function APIRoutes(serverApp) {
  this.getRoute = function() {
    serverApp.get("/api/friends", function(req, res) {
      res.json(data);
    });
  }

  this.postRoute = function() {
    serverApp.post("/survey", function(req, res) {
    });
  }
}

module.exports = APIRoutes;