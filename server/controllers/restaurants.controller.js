// require dependencies
const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');

// overwrite mongoose's deprecated Promise with built-in ES6 Promise
mongoose.Promise = global.Promise;

// export the get function which dynamically gets the appropriate callback
// function for the exercise number specificed in the params
exports.get = function(req, res) {
  exercises[req.params.id](req, res);
}

// declare and assign the exercises object
let exercises = {};

// EXAMPLE
// This is the solution to the first exercise, all answers should take a similar
// format
exercises[1] = function(req, res) {

  Restaurant.find({}, function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}

// DIRECTIONS
// uncomment the stub below and use it as a prototype for all 32 exercises

// exercises[2] = function(req, res) {
//
//   Restaurant.find({}, function(err, restaurants) {
//     if (err) res.status(500).json(err);
//     res.json(restaurants);
//   })
//
// }
