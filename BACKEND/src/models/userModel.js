const { Schema, model } = require('mongoose');
const md5 = require('md5');

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

userSchema.methods.validPassword = function validPassword(pwd) {
  return this.password === md5(pwd);
};

module.exports = model('User', userSchema);
