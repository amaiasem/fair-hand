/* eslint-disable no-underscore-dangle */
const { findByIdAndUpdate } = require('../models/userModel');
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

async function getUser(req, res) {
  const id = req.body._id;

  try {
    const foundUser = await User.findById(id).exec();
    res.json(foundUser);
  } catch (error) {
    res.status(500);
    res.send('Could not find the user');
  }
}

async function deleteUser(req, res) {
  const id = req.body._id;

  try {
    const deletedUser = await User.findByIdAndDelete(id).exec();
    res.json(deletedUser);
  } catch (error) {
    res.status(500);
    res.send('Could not delete the user');
  }
}

async function updateUser(req, res) {
  const id = req.body._id;
  const toUpdate = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, toUpdate, { new: true }).exec();
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send('Could not update the user');
  }
}

module.exports = {
  createUser, getUser, deleteUser, updateUser
};
