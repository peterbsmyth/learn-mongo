const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');

mongoose.Promise = global.Promise;

exports.get = function(req, res) {
  exercises[req.params.id](req, res);
}

let exercises = {};

exercises[1] = function(req, res) {

  Restaurant.find({})
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}

exercises[2] = function(req, res) {

  Restaurant.find({})
    .select('restaurant_id name borough cuisine')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}

// --- START HERE --- //
exercises[3] = function(req, res) {

}


exercises[4] = function(req, res) {

}


exercises[5] = function(req, res) {

}


exercises[6] = function(req, res) {

}


exercises[7] = function(req, res) {

}


exercises[8] = function(req, res) {

}


exercises[9] = function(req, res) {

}


exercises[10] = function(req, res) {

}


exercises[11] = function(req, res) {

}


exercises[12] = function(req, res) {

}


exercises[13] = function(req, res) {

}


exercises[14] = function(req, res) {

}


exercises[15] = function(req, res) {

}


exercises[16] = function(req, res) {

}


exercises[17] = function(req, res) {

}


exercises[18] = function(req, res) {

}


exercises[19] = function(req, res) {

}


exercises[20] = function(req, res) {

}


exercises[21] = function(req, res) {

}


exercises[22] = function(req, res) {

}


exercises[23] = function(req, res) {

}


exercises[24] = function(req, res) {

}


exercises[25] = function(req, res) {

}


exercises[26] = function(req, res) {

}


exercises[27] = function(req, res) {

}


exercises[28] = function(req, res) {

}


exercises[29] = function(req, res) {

}


exercises[30] = function(req, res) {

}


exercises[31] = function(req, res) {

}


exercises[32] = function(req, res) {

}
