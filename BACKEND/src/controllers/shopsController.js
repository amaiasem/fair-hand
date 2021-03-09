/* eslint-disable no-underscore-dangle */
const Shop = require('../models/shopModel');

function getAllShops(req, res) {
  const query = {};

  Shop.find(query, (error, foundShops) => {
    if (error) {
      res.status(500);
      res.send('Could not get the shops');
    } else {
      res.json(foundShops);
    }
  });
}

async function getOneShop(req, res) {
  const id = req.body._id;

  try {
    const foundShop = await Shop.findById(id).exec();
    res.json(foundShop);
  } catch (error) {
    res.status(500);
    res.send('Could not find the shop');
  }
}

function createShop(req, res) {
  const newShop = new Shop(req.body);

  newShop.save((error) => {
    if (error) {
      res.status(500);
      res.send('Could not create a shop');
    } else {
      res.json(newShop);
    }
  });
}

module.exports = {
  getAllShops,
  getOneShop,
  createShop
};
