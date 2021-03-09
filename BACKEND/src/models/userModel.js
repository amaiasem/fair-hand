const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  image: String,
  address: String,
  myFavourites: [
    {
      shopId: String
    }
  ]
});

module.exports = model('User', userSchema);
