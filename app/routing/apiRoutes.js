var data = require("../data/friends.js");

// constructor for an object which contains the get and post routes for the API on the server, simply pass in an initialized express instance 
function APIRoutes(serverApp) {
  //api get route
  this.getRoute = function() {
    serverApp.get("/api/friends", function(req, res) {
      res.json(data);
    });
  }
  //api post route
  this.postRoute = function() {
    serverApp.post("/api/friends", function(req, res) {
      //creates new object with the new users information and pushed it to the data array
        var newUser = req.body;
        //parses scores to ints from strings
        newUser.scores = newUser.scores.map(x => parseInt(x));
        //gets best match from already available friend objects
        var bestFriend = getFriend(newUser, data);
        //adds new user to existing data
        data.push(newUser);
        //responds with the match
        res.json(bestFriend);
    });
  }
  //helped function to find best match
  getFriend = function(self, friendsArr) {
    //empty variable to hold best match
    var closest;
    //variable to test against for the closest match so far in the loop, set to just above the maximum possible score
    var currentClosest = 51;
    //loops through available friends to match
    friendsArr.forEach(function(current) {
      var acc = 0;
      for (var i = 0; i < 10; i++) {
        //accumulate absolute value of differences between scores fore each question
        acc += Math.abs(self.scores[i] - current.scores[i]);
      }
      if (acc < currentClosest) {
        closest = current;
      }
    });
    return closest;
  }
}

module.exports = APIRoutes;