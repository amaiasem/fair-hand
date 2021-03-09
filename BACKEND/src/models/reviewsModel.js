const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
  userId: String,
  userName: String,
  shopName: String,
  image: String,
  review: String
});

module.exports = model('Review', reviewSchema);
