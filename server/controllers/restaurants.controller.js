const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');

exports.one = function(req, res) {

  Restaurant.find({}, function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}
