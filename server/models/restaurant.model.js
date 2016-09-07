const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Grade = require('./grade.model').schema;
const Address = require('./address.model').schema;

const RestaurantSchema = new Schema ({
  address: Address,
  borough: { type: String },
  cuisine: { type: String },
  grades: [Grade],
  name: { type: String },
  restaurant_id: { type: String }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
