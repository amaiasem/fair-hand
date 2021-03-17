const md5 = require('md5');
const User = require('../models/userModel');

function register(req, res) {
  const { email, password } = req.body;
  const user = new User({
    email,
    password: md5(password)
  });

  try {
    user.save();

    req.login(user, () => {
      res.redirect('/user');
    });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function login(req, res) {
  res.status(200);
  res.json(req.body);
}

module.exports = { register, login };
