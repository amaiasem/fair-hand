const User = require('../models/userModel');

function createUser(req, res) {
  const newUser = new User(req.body);

  newUser.save((error) => {
    if (error) {
      res.status(500);
      res.send('Could not create a user');
    } else {
      res.json(newUser);
    }
  });
}

module.exports = {
  createUser
};
