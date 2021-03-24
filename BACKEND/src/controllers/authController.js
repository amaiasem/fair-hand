const md5 = require('md5');
const User = require('../models/userModel');

async function register(req, res) {
  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password: md5(password)
  });

  const userExist = await User.findOne({ email }).exec();

  if (userExist) {
    res.send('User already exists!');
  } else {
    try {
      user.save();
      req.login(user, () => {
        res.json(user);
      });
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
}

async function login(req, res) {
  const { email } = req.body;
  const user = await User.findOne({ email }).exec();

  res.status(200);
  res.json(user);
}

module.exports = { register, login };
