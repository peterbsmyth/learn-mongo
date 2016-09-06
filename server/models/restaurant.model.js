const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Grade = require('./grade.model');
const Address = require('./address.model');

const RestaurantSchema = new Schema ({
  address: { type: Address },
  borough: { type: String },
  cuisine: { type: String },
  grades: [Grade],
  name: { type: String },
  restaurant_id: { type: String }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
