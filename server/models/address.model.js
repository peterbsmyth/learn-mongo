const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema ({
  building: { type: String },
  coord: { type: Array },
  street: { type: String },
  zipcode: { type: String }
}, {
  _id: false
});

module.exports = mongoose.model('Address', AddressSchema);
