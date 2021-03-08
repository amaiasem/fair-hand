const { Schema, model } = require('mongoose');

const shopSchema = new Schema({
  shopName: String,
  address: String,
  latlong: {
    lat: String,
    long: String
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
