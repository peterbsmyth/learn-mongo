const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');

mongoose.Promise = global.Promise;

exports.get = function(req, res) {
  exercises[req.params.id](req, res);
}

let exercises = {};

exercises[1] = function(req, res) {

  Restaurant.find({}, function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}

exercises[2] = function(req, res) {

  Restaurant.find({}, 'restaurant_id name borough cuisine',  function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}

exercises[3] = function(req, res) {

  Restaurant.find({}, '-_id restaurant_id name borough cuisine',  function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}


exercises[4] = function(req, res) {

  Restaurant.find({}, '-_id restaurant_id name borough address.zipcode',  function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}


exercises[5] = function(req, res) {

  Restaurant.find({ borough: 'Bronx' }, function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}


exercises[6] = function(req, res) {

  Restaurant.find({ borough: 'Bronx' }).limit(5).exec(function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}


exercises[7] = function(req, res) {

  Restaurant
    .find({ borough: 'Bronx' })
    .limit(5)
    .skip(5)
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[8] = function(req, res) {

  Restaurant
    .find({ 'grades.score': { $gt: 90 } })
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[9] = function(req, res) {

  Restaurant
    .find({ 'grades.score': { $gt: 80, $lt: 100 } })
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[10] = function(req, res) {

  Restaurant
    .find( 'address.coords' )
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


