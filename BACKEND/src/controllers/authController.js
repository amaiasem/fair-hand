const md5 = require('md5');
const User = require('../models/userModel');

async function register(req, res) {
  const { name, email, password } = req.body;
  // eslint-disable-next-line no-console
  console.log(email);
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

function login(req, res) {
  res.status(200);
  res.json(req.body);
}

module.exports = { register, login };
