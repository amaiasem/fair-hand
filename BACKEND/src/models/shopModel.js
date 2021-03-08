const { Schema, model } = require('mongoose');

const shopSchema = new Schema({
  shopName: String,
  address: String,
  latlong: {
    lat: Number,
    long: Number
  },
  schedule: String,
  website: String,
  phone: Number,
  coverImage: String,
  logoImage: String,
  type: [String],
  NewIn: {
    productName: String,
    productImage: String,
    price: Number,
    url: String
  }
});

module.exports = model('Shop', shopSchema);
